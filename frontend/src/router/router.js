import React from 'react'
import {Route} from 'wouter'
import Home from '../pages';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login'

function Router() {
  return (
 
         <div>
          <Route  path="" component={Home} />
          <Route  path="/login" component={Login} />
          <Route  path="/dashboard" component={Dashboard} />
         </div>
  );
     

}

export default Router;
