import React, { Component } from 'react';
import MatchPage from '../pages/MatchPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>increase</button>
      </div>

      //      <div>
      //        <Switch>
      //          <Route exact path="/">
      //            <Redirect to="/match/premier?from=2020-02-01&to=2020-03-01" />
      //          </Route>
      //          <Route path="/match/:leagueName?" component={MatchPage} />
      //          <Route render={() => <div>wrong url</div>} />
      //        </Switch>
      //      </div>
    );
  }
}

export default App;
