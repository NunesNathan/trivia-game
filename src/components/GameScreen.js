import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPIToken, makeScore } from '../redux/actions';
import { fetchQuestions } from '../services/tokenAPI';
import {
  decodeCharacter, overrideTime,
  shuffleOptions, timerSeconds
} from '../services/events';
import { setNewRanking } from '../services/localStorage';
import getGravatarUrl from '../services/gravatar';
import { calculatePoints, progressBar } from '../helpers/score';
import Button from './Button';
import Timer from './Timer';

class GameScreen extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      questionIndex: 0,
      actualQuestion: {},
      haveOptions: false,
      haveAnswer: false,
      disabledButton: false,
      correctStyle: '',
      incorrectStyle: '',
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  componentWillUnmount() {
    const { id, progressBarId } = this.state;
    clearInterval(id);
    clearInterval(progressBarId);
  }

  getQuestions = async () => {
    const { token, dispatch, history } = this.props;
    const questions = await fetchQuestions(token);
    if (questions.response_code === 0) {
      this.setState({
        questions: questions.results,
        id: timerSeconds(this.disabledButtons),
        progressBarId: progressBar(),
      }, () => this.renderQuestion());
    } else {
      dispatch(await fetchAPIToken());
      await this.getQuestions(history);
    }
  }

  renderQuestion = () => {
    const { questions, questionIndex } = this.state;
    this.setState({
      actualQuestion: questions[questionIndex],
      haveOptions: true,
    }, () => shuffleOptions());
  }

  answerClicked = (boll) => {
    const { id, progressBarId } = this.state;
    const { dispatch, score } = this.props;
    clearInterval(id);
    clearInterval(progressBarId);
    this.setState({
      haveAnswer: true,
      correctStyle: '3px solid rgb(6, 240, 15)',
      incorrectStyle: '3px solid rgb(255, 0, 0)',
    });

    if (boll === true) {
      const { actualQuestion: { difficulty } } = this.state;
      const time = 30;
      const points = calculatePoints(difficulty, time);
      const newScore = score + points;

      dispatch(makeScore(newScore));
    }
  }

  disabledButtons = () => {
    const { id, progressBarId } = this.state;
    this.setState({
      disabledButton: true,
      haveAnswer: true,
      correctStyle: '3px solid rgb(6, 240, 15)',
      incorrectStyle: '3px solid rgb(255, 0, 0)',
    });
    clearInterval(id);
    clearInterval(progressBarId);
  }

  renderOptions = ({ correct_answer: correct, incorrect_answers: incorrect }) => {
    const { correctStyle, incorrectStyle, disabledButton } = this.state;
    return (
      <div className="d-flex flex-wrap justify-content-evenly" id="options">
        <Button
          text={ decodeCharacter(correct) }
          style={ { border: correctStyle } }
          disabled={ disabledButton }
          onClick={ () => this.answerClicked(true) }
        />
        { incorrect.map((each, i) => (
          <Button
            key={ decodeCharacter(each) }
            text={ decodeCharacter(each) }
            style={ { border: incorrectStyle } }
            disabled={ disabledButton }
            onClick={ () => this.answerClicked(false) }
          />
        )) }
      </div>);
  };

  nextQuestion = () => {
    const { questionIndex, questions, id, progressBarId } = this.state;
    const { history, score, name, email } = this.props;
    clearInterval(id);
    clearInterval(progressBarId);
    if (questionIndex < (questions.length - 1)) {
      overrideTime();
      this.setState({
        id: timerSeconds(this.disabledButtons),
        progressBarId: progressBar(),
        questionIndex: questionIndex + 1,
        haveAnswer: false,
        correctStyle: '',
        incorrectStyle: '',
        disabledButton: false,
      }, () => this.renderQuestion());
    } else {
      const record = { name, score, picture: getGravatarUrl(email) };
      setNewRanking(record);
      history.push('/feedback');
    }
  }

  render() {
    const { actualQuestion, haveOptions, haveAnswer } = this.state;
    return (
      <main className="card">
        { !haveOptions
          ? (<p>Carregando</p>)
          : (
            <div className="d-flex flex-column">
              <p className="my-2">{ actualQuestion.category }</p>
              <p className="lead">
                { decodeCharacter(actualQuestion.question) }
              </p>
              { this.renderOptions(actualQuestion) }
            </div>) }
        { haveAnswer
          && (
            <Button
              text="Next"
              className="btn-next"
              onClick={ this.nextQuestion }
            />
          ) }
        <Timer />
      </main>
    );
  }
}

GameScreen.propTypes = {
  token: PropType.string.isRequired,
  name: PropType.string.isRequired,
  email: PropType.string.isRequired,
  dispatch: PropType.func.isRequired,
  history: PropType.shape({
    push: PropType.func,
  }).isRequired,
  score: PropType.number.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
  assertions: state.player.assertions,
  score: state.player.score,
  name: state.player.name,
  email: state.player.gravatarEmail,
});

export default connect(mapStateToProps)(GameScreen);
