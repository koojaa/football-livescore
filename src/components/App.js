import React, { Component } from 'react';
import MatchPage from '../pages/MatchPage';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={MatchPage} />
        <Route path="/match/:leagueName?" component={MatchPage} />
      </div>
    );
  }
}

export default App;
