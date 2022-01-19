import React, { Component } from 'react';
import logo from '../trivia.png';

export default class Logo extends Component {
  render() {
    return (
      <img src={ logo } className="App-logo" alt="logo" />
    );
  }
}
