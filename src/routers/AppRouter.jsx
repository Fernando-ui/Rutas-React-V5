import {useContext} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";



export const AppRouter = () => {
  const {user:{logged}} = useContext(AuthContext);
  console.log(logged);
  
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginScreen} isAuthenticated={logged}/>
            
            <PrivateRoutes path="/" component={DashboardRoutes} isAuthenticated={logged} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
