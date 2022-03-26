import React from "react";
import { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
