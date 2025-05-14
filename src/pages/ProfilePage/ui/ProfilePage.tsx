import { profileReducer } from 'entities/Profile';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
    profile: profileReducer,
};

export default function ProfilePage() {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <div>{t('ProfilePage')}</div>
        </DynamicModuleLoader>
    );
}
