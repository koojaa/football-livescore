import React, { Component } from 'react';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot, setConfig } from 'react-hot-loader';

setConfig({
  reloadHooks: true
});

class Root extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(Root);
