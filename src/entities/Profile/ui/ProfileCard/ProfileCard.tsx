/* eslint-disable i18next/no-literal-string */
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import styles from './ProfileCard.module.scss';

export default function ProfileCard() {
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const { t } = useTranslation();

    return (
        <div className={styles.profileCard}>
            <div className={styles.header}>
                <Text title={t('Профиль')} />
                <button className={styles.btn} type="button">
                    {t('редактировать')}
                </button>
            </div>
            <div className={styles.data}>
                <Input className={styles.input} value={data?.first} placeholder={t('Ваше имя')} />
                <Input className={styles.input} value={data?.lastname} placeholder={t('Ваша фамилия')} />
            </div>
        </div>
    );
}
