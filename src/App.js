import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PlannedFurniture from './pages/PlannedFurniture';
import SingleFurniture from './pages/SingleFurniture';
import Error from './pages/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/furniture/" component={PlannedFurniture} />
        <Route exact path="/furniture/:slug" component={SingleFurniture} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
