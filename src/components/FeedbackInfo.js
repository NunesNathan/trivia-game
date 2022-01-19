import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

class FeedbackInfo extends Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <div>
        <p>
          You got
          <span data-testid="feedback-total-question">
            { assertions }
          </span>
          questions right!
        </p>
        <p>
          Totaling
          <span data-testid="feedback-total-score">{ score }</span>
          points
        </p>
      </div>
    );
  }
}

FeedbackInfo.propTypes = {
  assertions: PropType.number.isRequired,
  score: PropType.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(FeedbackInfo);
