import { render, screen } from '@testing-library/react';
import React from 'react';

import { renderWithProvider } from '../__utils__/renderWithProvider';

import { Home } from '../../pages/Home';

describe('Home', () => {
    it('renders Home', () => {
        render(<Home />);
    });

    it('renders the title', async () => {
        renderWithProvider(<Home />);
        const title = await screen.findByText('Home');
        expect(title).toBeInTheDocument();
    });

    it('renders the text', async () => {
        renderWithProvider(<Home />);
        const text = await screen.findByText(
            'Sorry, this page is under construction.'
        );
        expect(text).toBeInTheDocument();
    });
});
