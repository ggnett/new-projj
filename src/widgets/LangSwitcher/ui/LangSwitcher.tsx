import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LangSwitcher.module.scss';

export default function LangSwitcher() {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <button type="button" className={styles.lang} onClick={toggle}>
            {t('язык')}
        </button>
    );
}
