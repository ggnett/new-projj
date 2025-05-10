/* eslint-disable i18next/no-literal-string */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React, { memo, useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';

import { loginActions } from 'features/AuthByUsername/model/slice/LoginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import cn from 'classnames';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import styles from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';

const LoginFrom = memo((props: { isOpen: boolean; setOpen?: () => void }) => {
    const { isOpen, setOpen } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch<any>();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeLogin = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            setOpen();
        }
    }, [dispatch, password, setOpen, username]);

    return (
        <div className={styles.loginForm}>
            <Text title={t('форма авторизации')} />
            {error && (
                <div>
                    <Text text={t('Не корректный логин или пароль')} theme={TextTheme.ERROR} />
                </div>
            )}
            <Input autofocus={isOpen} onChange={onChangeLogin} value={username} placeholder={t('Enter login')} />
            <Input onChange={onChangePassword} value={password} placeholder={t('Enter password')} />
            <button onClick={onLoginClick} className={cn(styles.loginBtn, { [styles.disabled]: isLoading })} type="button">
                {t('войти')}
            </button>
        </div>
    );
});

export default LoginFrom;
