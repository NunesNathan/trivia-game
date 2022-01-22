import React, { Component } from 'react';
import PropType from 'prop-types';
import Button from '../components/Button';
import RankingList from '../components/RankingList';
import '../styles/Ranking.css';
export default class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <main>
        <h1 className="title">Ranking</h1>
        <RankingList />
        <Button
          text="Play Again"
          className="btn-play-again col-md-4 col-12 col-lg-3"
          onClick={ () => history.push('/') }
          disabled={ false }
        />
      </main>
    );
  }
}

Ranking.propTypes = {
  history: PropType.shape({
    push: PropType.func,
  }).isRequired,
};
