import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from "./config/routes";
import AuthProviderAdmin from "./provider/AuthProviderAdmin";

function App() {
  return (
     <div>
  
   <AuthProviderAdmin>
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
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
