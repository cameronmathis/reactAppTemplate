import { ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./components/Routes";
import useStore from "./Store";
import theme from "./Theme";

function App() {
  const setIsMobile = useStore((state) => state.setIsMobile);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 765)
    );
  }, [setIsMobile]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
