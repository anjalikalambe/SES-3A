import React from 'react';
import { useStore } from '../stores/helpers/UseStore';
import { Route, Redirect } from 'react-router-dom'

const UnprotectedRoute = ({ component: Component, ...rest }) => {
  const { userAuth } = useStore(); //MobX persisted store

  return (
    <Route
      {...rest}
      render={props => {
        if (!userAuth.loggedIn) {
          return <Component {...props} /> //just take to the component it asked to go to
        } else if (userAuth.loggedIn) {
          return <Redirect to={
            {
              pathname: props.location.state? props.location.state.from.pathname : '/rooms',
              state: {
                from: props.location
              }
            } 
          } />
        }
      }}
    />
  );
}

export default UnprotectedRoute;
