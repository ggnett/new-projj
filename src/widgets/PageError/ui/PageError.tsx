import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PageError.module.scss';

export default function PageError() {
    const { t } = useTranslation();

    const refr = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={styles.root}>
            <p>{t('Что-то пошло не так')}</p>
            <button type="button" onClick={refr}>
                {t('обновить')}
            </button>
        </div>
    );
}
