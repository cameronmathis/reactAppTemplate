import { render, screen } from '@testing-library/react';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components/Header';

describe('Home', () => {
    it('renders Header', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    });

    it('renders the title', async () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const title = await screen.findByText('React App');
        expect(title).toBeInTheDocument();
    });
});
