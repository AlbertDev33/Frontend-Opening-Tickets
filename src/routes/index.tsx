import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Tickets from '../pages/Tickets';
import Edit from '../pages/Edit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/tickets" component={Tickets} isPrivate />
    <Route path="/edit/:id" component={Edit} isPrivate />
  </Switch>
);

export default Routes;
