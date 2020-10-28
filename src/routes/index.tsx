import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Tickets from '../pages/Tickets';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/tickets" component={Tickets} isPrivate />
  </Switch>
);

export default Routes;
