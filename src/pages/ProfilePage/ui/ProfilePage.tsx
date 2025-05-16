/* eslint-disable object-curly-newline */
import { fetchProfileData, getProfileError, getProfileIsLoading, ProfileCard, profileReducer } from 'entities/Profile';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getUserAuthData } from 'entities/User';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <div>
                <ProfilePageHeader />
                <ProfileCard data={data} isLoading={isLoading} error={error} />
            </div>
        </DynamicModuleLoader>
    );
}
