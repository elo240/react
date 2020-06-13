import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import UserStore from '../stores/UserStore'

export const ProtectedRoute = ({
    component: Component,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (UserStore.isLoggedIn) {
            return <Component {...props} />;
          } else {
            alert("Please login or Register to gain access");
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };
  