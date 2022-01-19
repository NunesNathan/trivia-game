import React, { Component } from 'react';
import PropType from 'prop-types';
import GameScreen from '../components/GameScreen';
import Header from '../components/Header';
import Timer from '../components/Timer';

class Game extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <GameScreen history={ history } />
        <Timer />
      </>
    );
  }
}

Game.propTypes = {
  history: PropType.shape({
    push: PropType.func,
  }).isRequired,
};

export default Game;
