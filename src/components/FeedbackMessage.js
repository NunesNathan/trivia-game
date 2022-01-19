import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

const PARAM_ASSERTIONS = 3;

class FeedbackMessage extends Component {
  render() {
    const { assertions } = this.props;
    return (
      <div>
        {assertions < PARAM_ASSERTIONS
          ? <h1 data-testid="feedback-text">Could be better...</h1>
          : <h1 data-testid="feedback-text">Well Done!</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

FeedbackMessage.propTypes = {
  assertions: PropType.number.isRequired,
};

export default connect(mapStateToProps)(FeedbackMessage);
