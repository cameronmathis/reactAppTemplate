import { render } from '@testing-library/react';
import { createInstance, Resource } from 'i18next';
import React, { ReactElement } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { i18n } from './i18n';

export function renderWithProvider(
    component: ReactElement,
    i18nResource: Resource = i18n
) {
    const i18nInstance = createInstance(
        { lng: 'en', resources: i18nResource },
        () => {}
    ).use(initReactI18next);

    return render(
        <I18nextProvider i18n={i18nInstance}>{component}</I18nextProvider>
    );
}
