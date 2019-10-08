import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import About from './About';

const {
  REACT_APP_AUTHENTICATION_HOST: authenticationHost,
  REACT_APP_PLACE_ORDER_HOST: placeOrderHost
} = process.env;

const Authentication = ({ history }) => (
  <MicroFrontend history={history} host={authenticationHost} name="Authentication" />
);

const PlaceOrder = ({ history }) => (
  <MicroFrontend history={history} host={placeOrderHost} name="PlaceOrder" />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/placeorder" component={PlaceOrder} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
