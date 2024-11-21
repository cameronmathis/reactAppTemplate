import { render, screen } from '@testing-library/react';
import React from 'react';

import { App } from '../App.tsx';

describe('App', () => {
    it('renders App', () => {
        render(<App />);
    });

    it('renders the Header', async () => {
        render(<App />);
        const title = await screen.findByText('React App');
        expect(title).toBeInTheDocument();
    });
});
