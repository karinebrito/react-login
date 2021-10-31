import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

function PrivateRoute({ children, ...rest }) {
    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

function Routes(){
    return(
        <BrowserRouter>
           <Switch>
               <Route path="/login" exact component={Login} />
               <PrivateRoute path="/home" exact>
                   <Home/>
               </PrivateRoute>
               <PrivateRoute path="/profile" exact>
                   <Profile/>
               </PrivateRoute>
           </Switch>
        </BrowserRouter>
    )
};

export default Routes;