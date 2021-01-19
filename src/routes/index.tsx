import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Admindashboard from '../pages/AdminDashboard';
import Tickets from '../pages/Tickets';
import Edit from '../pages/Edit';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/admin" component={Admindashboard} isAdmin />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/tickets" component={Tickets} isPrivate />
    <Route path="/edit/:id" component={Edit} isPrivate />
  </Switch>
);

export default Routes;
