import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../stores/rootStore";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Registration from "../pages/Registration";

function PrivateRoute({ children, ...rest }: RouteProps) {
  const userStore = useSelector((store: RootStore) => store.userStore);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userStore.isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function OnlyPublicRoute({ children, ...rest }: RouteProps) {
  const userStore = useSelector((store: RootStore) => store.userStore);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !userStore.isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function RoutesContainer() {
  return (
    <Router>
      <Switch>
        <OnlyPublicRoute path="/auth">
          <Auth />
        </OnlyPublicRoute>
        <OnlyPublicRoute path="/registration">
          <Registration />
        </OnlyPublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default RoutesContainer;
