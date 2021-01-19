import React, { useContext } from 'react';
import jwt from 'jsonwebtoken';
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom';

import { AuthContext } from '../hook/AuthContext';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  isAdmin?: boolean;
  component: React.ComponentType;
}

interface UserRole {
  userRoles: string;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isAdmin = false,
  component: Component,
  ...rest
}) => {
  const { user, token } = useContext(AuthContext);

  const userToken = jwt.decode(token);
  const role = userToken as UserRole;

  // logado/privada/admin
  // true/false/true = ok
  // true/true/false = ok
  // false/true/false = redireciona
  // false/false/true = redireciona
  // false/false/false = ok

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        if (!user && !role) {
          return isPrivate || isAdmin ? (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          ) : (
            <Component />
          );
        }

        if (role.userRoles !== process.env.REACT_APP_ROLE) {
          return isPrivate === !!user ? (
            <Component />
          ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location },
              }}
            />
          );
        }

        return isAdmin === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isAdmin ? '/' : '/admin',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
