import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

import styles from './ProfilePageHeader.module.scss';

export default function ProfiePageHeader() {
    const { t } = useTranslation();

    return (
        <div className={styles.header}>
            <Text title={t('Профиль')} />
            <button className={styles.btn} type="button">
                {t('редактировать')}
            </button>
        </div>
    );
}
