import PageNotFound from "../pages/PageNotFound";

import Home from "../pages/Home";
import Login from "../pages/Login";
import NotLoggedIn from "../pages/NotLoggedIn";
import { ReactElement } from "react";

export interface Page {
  path: string;
  component: ReactElement;
}

export const HOME: Page = {
  path: "/home",
  component: <Home />,
};

export const LOGIN: Page = {
  path: "/login",
  component: <Login />,
};

export const NOT_LOGGED_IN: Page = {
  path: "/notLoggedIn",
  component: <NotLoggedIn />,
};

export const PAGE_NOT_FOUND: Page = {
  path: "/pageNotFound",
  component: <PageNotFound />,
};

export const PAGES: Page[] = [HOME, LOGIN, NOT_LOGGED_IN, PAGE_NOT_FOUND];
