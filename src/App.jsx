import React from "react";
import { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routes from "./components/Routes";
import * as styles from "./css/App.module.css";
import useStore from "./Store";

function App() {
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
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
