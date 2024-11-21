import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { PAGES } from '../constants/Pages';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';

export function Routes() {
    return (
        <ReactRoutes>
            <>
                <Route path='/' element={<Home />} />
                {PAGES.map((page, key) => (
                    <Route
                        path={page.path}
                        element={page.component}
                        key={key}
                    />
                ))}
            </>
            <Route path='*' element={<PageNotFound />} />
        </ReactRoutes>
    );
}
