import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return (
      <div>
        <h1
          id="count-down-timer"
        >
          { 30 }
        </h1>
      </div>
    );
  }
}
