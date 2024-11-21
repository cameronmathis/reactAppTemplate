import React from 'react';
import { useTranslation } from 'react-i18next';

import { InfoPage } from '../components/InfoPage';

export function PageNotFound() {
    const { t } = useTranslation('pageNotFound');

    return <InfoPage title={t('title')} text={t('text')} />;
}
