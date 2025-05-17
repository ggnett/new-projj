import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
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
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={styles.header}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <button onClick={onEdit} className={styles.btn} type="button">
                    {t('Редактировать')}
                </button>
            ) : (
                <>
                    <button onClick={onSave} className={styles.btn} type="button">
                        {t('Сохранить')}
                    </button>
                    <button onClick={onCancelEdit} className={styles.btnCancel} type="button">
                        {t('Отменить')}
                    </button>
                </>
            )}
        </div>
    );
}
