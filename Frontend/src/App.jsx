import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from "./config/routes";
import AuthProviderAdmin from "./provider/AuthProviderAdmin";
import AuthProviderUser from "./provider/AuthProviderUser";

function App() {

  return (
  <div>
   <AuthProviderAdmin>
      <AuthProviderUser>
      <Router>
        <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
        </Switch>
      </Router>
      </AuthProviderUser>
   </AuthProviderAdmin>
  </div>
  );

}

function RouteWithSubRoutes(route){
  return (
    <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component routes={route.routes} {...props} />}  
    />
  );
}

export default App;
