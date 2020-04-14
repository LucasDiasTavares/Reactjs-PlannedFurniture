import React from 'react';
import './App.css';

import Home from './pages/Home';
import PlannedFurniture from './pages/PlannedFurniture';
import SingleFurniture from './pages/SingleFurniture';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/furniture/" component={PlannedFurniture} />
        <Route exact path="/furniture/:slug" component={SingleFurniture} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
