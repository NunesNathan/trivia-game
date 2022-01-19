import React from 'react';
import PropType from 'prop-types';
import Logo from '../components/Logo';
import Login from '../components/Login';
import '../styles/Home.css';

export default function Home({ history }) {
  return (
    <main className="App-header">
      <Logo />
      <Login history={ history } />
    </main>
  );
}

Home.propTypes = {
  history: PropType.shape({
    push: PropType.func.isRequired,
  }).isRequired,
};
