import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as RouteDOMProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends RouteDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : user.admin ? '/admin' : '/dashboard',
            }}
          />
        );
      }}
    />
  );
};

export default Route;
