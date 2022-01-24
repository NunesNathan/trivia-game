import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { addUser, fetchAPIToken, playAgain } from '../redux/actions';
import Button from './Button';
import Input from './Input';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      disabled: true,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(playAgain());
  }

  verifyEntries = () => {
    const { email, name } = this.state;
    const minLength = 3;
    /* regex https://stackoverflow.com/questions/46155/how-to-validate-an-email-address
    -in-javascript porém com alteração */
    if (email.match(/^[^\s@!#$%"'&*()]+@[^\s@!#$%"'&*()]+\.[^\s@!#$%"'&*()]+$/)
      && name.length >= minLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  changeValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.verifyEntries());
  }

  submitLogin = async () => {
    const { dispatch, history } = this.props;
    const { email, name } = this.state;
    dispatch(addUser({ email, name }));
    dispatch(await fetchAPIToken(history));
  }

  submitSettings = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { email, name, disabled } = this.state;
    return (
      <div className="user-box">
        <Input
          id="name"
          test="input-player-name"
          label="Nickname"
          value={ name }
          type="text"
          changeValue={ this.changeValue }
        />
        <Input
          id="email"
          test="input-gravatar-email"
          label="Gravatar Email"
          value={ email }
          type="email"
          changeValue={ this.changeValue }
        />
        <div>
          <Button
            text="Play"
            className="btn-play"
            disabled={ disabled }
            onClick={ this.submitLogin }
          />
          <Button
            text="Settings"
            className="btn-settings"
            onClick={ this.submitSettings }
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropType.func.isRequired,
  history: PropType.shape({
    push: PropType.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
