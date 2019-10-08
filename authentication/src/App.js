import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Authenticationpage from './page/Authenticationpage'

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={this.props.history || defaultHistory}>
        <Authenticationpage />
      </Router>
    );
  }
}

export default App;
