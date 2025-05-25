/* eslint-disable comma-dangle */
import { addCommentFormError, addCommentFromText } from 'features/addCommentForm/model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from 'shared/ui/Input';

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

export default function AddCommentForm() {
    const { t } = useTranslation();

    const text = useSelector(addCommentFromText);
    const error = useSelector(addCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <div>
                <Input value={text} placeholder={t('Введите текст комментария')} onChange={onCommentTextChange} />
                <button type="button">{t('Отправить')}</button>
            </div>
        </DynamicModuleLoader>
    );
}

// 16 44 stili
