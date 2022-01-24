import React, { Component } from 'react';
import PropType from 'prop-types';
import GameScreen from '../components/GameScreen';
import Header from '../components/Header';
import '../styles/Game.css'

class Game extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header place="game"/>
        <GameScreen history={ history } />
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
