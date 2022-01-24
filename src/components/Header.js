import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import getGravatarUrl from '../services/gravatar';

class Header extends Component {
  render() {
    const { email, name, score, place } = this.props;
    const result = place === "game"
      ? (
        <header className="card flex-row justify-content-around">
          <div className="d-flex flex-column mx-5">
            <img
              className="rounded-circle"
              src={getGravatarUrl(email)}
              alt={name}
            />
            <p className="userName">
              {name}
            </p>
          </div>
          <span className="display-5 align-self-center points">
            {`Score: ${score}`}
          </span>
        </header >
      ) : (
        <header className="card flex-row justify-content-evenly">
          <img
            className="rounded-circle"
            src={getGravatarUrl(email)}
            alt={name}
          />
          <p className="userName">
            {name}
          </p>
        </header>
      )
    return result;
  }
}

Header.propTypes = {
  email: PropType.string.isRequired,
  name: PropType.string.isRequired,
  score: PropType.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
