import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import './styles/Global.css'

export default function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={ Home }
      />
      <Route
        path="/settings"
        component={ Settings }
      />
      <Route
        path="/game"
        component={ Game }
      />
      <Route
        path="/feedback"
        component={ Feedback }
      />
      <Route
        path="/ranking"
        component={ Ranking }
      />
    </Switch>
  );
}
