/* eslint-disable i18next/no-literal-string */
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import cn from 'classnames';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import styles from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface props {
    data?: Profile;
    error?: string;
    isLoading: boolean;
}

export default function ProfileCard({ data, error, isLoading }: props) {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={cn(styles.profileCard, styles.loading)}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cn(styles.profileCard, styles.error)}>
                <Text theme={TextTheme.ERROR} title={t('something error')} text={t('try to refresh')} align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div className={styles.profileCard}>
            <div className={styles.data}>
                <Input value={data?.first} placeholder={t('Ваше имя')} readonly />
                <Input value={data?.lastname} placeholder={t('Ваша фамилия')} readonly />
            </div>
        </div>
    );
}
