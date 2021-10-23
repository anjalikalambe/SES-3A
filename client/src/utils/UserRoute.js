import React from 'react';
import { useStore } from '../stores/helpers/UseStore';
import { Route, Redirect, useHistory } from 'react-router-dom'

const UserRoute = ({ component: Component, ...rest }) => {
  const { userAuth } = useStore(); //MobX persisted store
  let history = useHistory();
  return (
    <Route
      {...rest}
      render={props => {
        if (userAuth.loggedIn) {
          return <Component {...props} /> //if logged in -> take it straight to the component it wants to go to 
        }
        return <Redirect to={
          {
            pathname: '/',
            state: {
              from: props.location
            }
          } 
        } />
      }}
    />
  );
}

export default UserRoute;