/* eslint-disable comma-dangle */
import { addCommentFormError, addCommentFromText } from 'features/addCommentForm/model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from 'shared/ui/Input';
import { sendComment } from '../../model/services/sendComment/sendComment';

import styles from './AddCommentForm.module.scss';

interface props {
    onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

export default function AddCommentForm({ onSendComment }: props) {
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

    // const onSendComment = useCallback(() => {
    //     dispatch(sendComment());
    // }, [dispatch]);

    const onSendHundler = () => {
        onSendComment(text || '');
        onCommentTextChange('');
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <div className={styles.root}>
                <Input value={text} placeholder={t('Введите текст комментария')} onChange={onCommentTextChange} />
                <button className={styles.btnSend} onClick={onSendHundler} type="button">
                    {t('Отправить')}
                </button>
            </div>
        </DynamicModuleLoader>
    );
}
