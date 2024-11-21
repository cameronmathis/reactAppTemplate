import React from 'react';
import { useTranslation } from 'react-i18next';

import { InfoPage } from '../components/InfoPage';

export function Home() {
    const { t } = useTranslation('home');

    return <InfoPage title={t('title')} text={t('text')} />;
}
