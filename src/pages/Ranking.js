import React, { Component } from 'react';
import PropType from 'prop-types';
import Button from '../components/Button';
import RankingList from '../components/RankingList';

export default class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <Button
          text="Play Again"
          test="btn-go-home"
          onClick={ () => history.push('/') }
          disabled={ false }
        />
        <RankingList />
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropType.shape({
    push: PropType.func,
  }).isRequired,
};