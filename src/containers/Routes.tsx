import React, { useEffect } from "react";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../stores/rootStore";
import { setTitle } from "../stores/titleStore";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Registration from "../pages/Registration";

interface CustomRouteProps extends RouteProps {
  title: string;
  isPrivate: boolean;
}

const routes = [
  {
    component: Registration,
    path: "/registration",
    title: "Регистрация",
    private: false,
  },
  {
    component: Auth,
    path: "/auth",
    title: "Авторизация",
    private: false,
  },
  {
    component: Home,
    path: "/",
    title: "Главная станица",
    private: true,
  },
];

function CustomRoute({ isPrivate, title, children, ...rest }: CustomRouteProps) {
  const userStore = useSelector((store: RootStore) => store.userStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(title));
    document.title = title;
  }, [dispatch, title]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (isPrivate ? userStore.isAuth : !userStore.isAuth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/auth" : "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function Routes() {
  return (
    <Switch>
      {routes.map((route, key) => (
        <CustomRoute isPrivate={route.private} title={route.title} key={key} path={route.path}>
          {route.component()}
        </CustomRoute>
      ))}
    </Switch>
  );
}

export default Routes;
