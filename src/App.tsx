import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "./stores/rootStore";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import { useBaseLayout } from "./customClasses/baseLayout";

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

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const classes = useBaseLayout();
  const user = useSelector((store: RootStore) => store.userStore);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Router>
          <AppBar />
          {user.isAuth && <Drawer />}
          <main className={classes.content}>
            <div className={classes.toolbar} />

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
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
