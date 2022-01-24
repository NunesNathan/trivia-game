import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="progress align-self-center">
          <div
            className="progress-bar progress-bar-striped
            progress-bar-animated"
            role="progressbar"
            aria-valuemin="0"
            aria-valuenow={ 100 }
            aria-valuemax="100"
            style={{ width: "100%", color: 'black' }} />
        </div>
        <span
          id="count-down-timer"
        >
          { 30 }
        </span>
      </div>
    );
  }
}
