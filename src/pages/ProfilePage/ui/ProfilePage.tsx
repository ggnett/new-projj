/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileErrors,
} from 'entities/Profile';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getUserAuthData } from 'entities/User';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { StateSchema } from 'app/providers/StoreProvider';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page';
import ProfilePageHeader from './ProfilePageHeader/ProfiePageHeader';

import styles from './ProfilePage.module.scss';

const reducers: ReducerList = {
    profile: profileReducer,
};

export default function ProfilePage() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const fromData = useSelector(getProfileForm);
    const validateErrors = useSelector(getProfileValidateError);

    const validateErrorTranslate = {
        [ValidateProfileErrors.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileErrors.NO_DATA]: t('нет данных'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Некорректный возраст'),
    };

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(fetchProfileData(id));
    }, [dispatch, id]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: value || '' }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch]
    );

    const onChangeUserNik = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value || '' }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(profileActions.updateProfile({ country: value || '' }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <Page>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslate[err]} />)}
                <ProfileCard
                    data={fromData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUserNik={onChangeUserNik}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </Page>
        </DynamicModuleLoader>
    );
}
