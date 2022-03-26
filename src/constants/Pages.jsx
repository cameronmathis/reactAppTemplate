import PageNotFound from "../pages/PageNotFound";

import Home from "../pages/Home";
import Login from "../pages/Login";
import NotLoggedIn from "../pages/NotLoggedIn";

export const HOME = {
  path: "/home",
  component: <Home />,
};

export const LOGIN = {
  path: "/login",
  component: <Login />,
};

export const NOT_LOGGED_IN = {
  path: "/notLoggedIn",
  component: <NotLoggedIn />,
};

export const PAGE_NOT_FOUND = {
  path: "/pageNotFound",
  component: <PageNotFound />,
};

export const PAGES = [HOME, LOGIN, NOT_LOGGED_IN, PAGE_NOT_FOUND];
