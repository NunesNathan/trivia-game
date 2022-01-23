import React, { Component } from 'react';
import PropType from 'prop-types';
import Button from '../components/Button';
import FeedbackInfo from '../components/FeedbackInfo';
import FeedbackMessage from '../components/FeedbackMessage';
import Header from '../components/Header';
import '../styles/Feedback.css'

export default class Feedback extends Component {
  playAgain = () => {
    const { history } = this.props;
    history.push('/');
  }

  ranking = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    return (
      <div>
        <Header />
        <div className="card">
          <FeedbackMessage />
          <FeedbackInfo />
          <Button
            text="Play Again"
            className="btn-play-again"
            onClick={ this.playAgain }
            disabled={ false }
          />
          <Button
            text="Ranking"
            className="btn-ranking"
            onClick={ this.ranking }
            disabled={ false }
          />
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropType.shape({
    push: PropType.func,
  }).isRequired,
};
