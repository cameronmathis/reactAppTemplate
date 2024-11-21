import { render } from '@testing-library/react';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Menu } from '../../components/Menu';

describe('Menu', () => {
    it('renders Menu', () => {
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );
    });
});
