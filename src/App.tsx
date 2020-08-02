import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/home/home.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
