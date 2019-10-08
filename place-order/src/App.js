import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import OrderPage from './pages/OrderPage'

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={this.props.history || defaultHistory}>
        <OrderPage />
      </Router>
    );
  }
}

export default App;
