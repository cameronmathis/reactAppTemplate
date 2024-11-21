import { ThemeProvider } from '@mui/material';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Routes } from './components/Routes';
import theme from './Theme';

export function App() {
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
