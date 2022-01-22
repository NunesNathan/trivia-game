import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import getGravatarUrl from '../services/gravatar';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    return (
      <header>
        <img
          src={ getGravatarUrl(email) }
          alt={ name }
        />
        <p>
          { name }
        </p>
        <span>
          {'Pontos: '}
        </span>
        <span>
          { score }
        </span>
      </header>
    );
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
