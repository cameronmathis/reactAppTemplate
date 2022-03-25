import React from "react";
import { Navigate, Routes as ReactRoutes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import useStore from "../Store";
import { PAGES } from "../constants/Pages";

function Routes() {
  const currentUser = useStore((state) => state.currentUser);

  return (
    <ReactRoutes>
      {!currentUser ? (
        <>
          <Route path={"/"} element={<Login />} />
          {PAGES.map((page, key) => (
            <Route path={page.path} element={<Navigate to="/" />} key={key} />
          ))}
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          {PAGES.map((page, key) => (
            <Route path={page.path} element={page.component} key={key} />
          ))}
        </>
      )}
      <Route path="*" element={<PageNotFound />} />
    </ReactRoutes>
  );
}

export default Routes;
