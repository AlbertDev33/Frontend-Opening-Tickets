import React, { useContext } from 'react';
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom';

import { AuthContext } from '../hook/AuthContext';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useContext(AuthContext);

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        );
      }}
    />
  );
};

export default Route;
