import React from "react";
import { useEffect } from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { HOME } from "./constants/Pages";
import * as styles from "./css/App.module.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import useStore from "./Store";

function App() {
  const currentUser = useStore((state) => state.currentUser);
  const setIsMobile = useStore((state) => state.setIsMobile);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 765)
    );
  }, [setIsMobile]);

  return (
    <div className={styles.body}>
      <Router>
        <Header />
        {currentUser ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={HOME} element={<Navigate to="/" />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        )}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
