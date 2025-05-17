/* eslint-disable object-curly-newline */
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
import Avatar from 'shared/ui/Avatar/Avatar';
import Select from 'shared/ui/Select/Select';
import { Country, Currency } from 'shared/const/common';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface props {
    data?: Profile;
    error?: string;
    isLoading: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUserNik?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export default function ProfileCard({
    data,
    error,
    isLoading,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUserNik,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: props) {
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
                <Text theme={TextTheme.ERROR} title={t('Что-то пошло не так')} text={t('Попробуйте обновить')} align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div className={styles.profileCard}>
            <div className={styles.data}>
                {data?.avatar && (
                    <div className={styles.avatarWrapper}>
                        <Avatar size={100} avatar={data.avatar} alt="avatar" />
                    </div>
                )}
                <Input onChange={onChangeFirstname} value={data?.first} placeholder={t('Ваше имя')} readonly={readonly} />
                <Input onChange={onChangeLastname} value={data?.lastname} placeholder={t('Ваша фамилия')} readonly={readonly} />
                <Input onChange={onChangeAge} value={data?.age} placeholder={t('Ваш возраст')} readonly={readonly} />
                <Input onChange={onChangeCity} value={data?.city} placeholder={t('Ваш город')} readonly={readonly} />
                <Input onChange={onChangeUserNik} value={data?.username} placeholder={t('Ваш ник')} readonly={readonly} />
                <Input onChange={onChangeAvatar} value={data?.avatar} placeholder={t('Аватар')} readonly={readonly} />
                <CurrencySelect onChange={onChangeCurrency} value={data?.currency} readonly={readonly} />
                <CountrySelect onChange={onChangeCountry} value={data?.country} readonly={readonly} />
            </div>
        </div>
    );
}
