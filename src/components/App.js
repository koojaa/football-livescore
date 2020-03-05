import React, { Component } from 'react';
import MatchPage from '../pages/MatchPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/match/premier?from=2020-02-01&to=2020-03-01" />
          </Route>
          <Route path="/match/:leagueName?" component={MatchPage} />
          <Route render={() => <div>wrong url</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
