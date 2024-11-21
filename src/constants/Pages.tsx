import React, { ReactElement } from 'react';

import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';

export interface Page {
    path: string;
    component: ReactElement;
}

export const HOME: Page = {
    path: '/home',
    component: <Home />,
};

export const PAGE_NOT_FOUND: Page = {
    path: '/pageNotFound',
    component: <PageNotFound />,
};

export const PAGES: Page[] = [HOME, PAGE_NOT_FOUND];
