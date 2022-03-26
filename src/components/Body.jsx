import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PAGES } from "../constants/Pages";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import useStore from "../Store";

function Body() {
  const currentUser = useStore((state) => state.currentUser);

  return (
    <Routes>
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
    </Routes>
  );
}

export default Body;
