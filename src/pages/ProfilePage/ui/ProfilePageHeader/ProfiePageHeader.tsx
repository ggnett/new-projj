import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './ProfilePageHeader.module.scss';

export default function ProfiePageHeader() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    return (
        <div className={styles.header}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <button onClick={onEdit} className={styles.btn} type="button">
                    {t('редактировать')}
                </button>
            ) : (
                <button onClick={onCancelEdit} className={styles.btn} type="button">
                    {t('отменить')}
                </button>
            )}
        </div>
    );
}
