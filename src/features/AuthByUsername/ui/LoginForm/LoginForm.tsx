import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

import styles from './LoginForm.module.scss';
// popravit' focus i td

export default function LoginFrom(props: { isOpen: boolean }) {
    const { isOpen } = props;

    const { t } = useTranslation();

    const [inpLogin, setInpLogin] = useState('');
    const [inpPassword, setInpPassword] = useState('');

    const onChangeLogin = (value: string) => {
        setInpLogin(value);
    };

    const onChangePassword = (value: string) => {
        setInpPassword(value);
    };

    return (
        <div className={styles.loginForm}>
            <Input autofocus={isOpen} onChange={onChangeLogin} value={inpLogin} placeholder={t('Enter login')} />
            <Input onChange={onChangePassword} value={inpPassword} placeholder={t('Enter password')} />
            <button className={styles.loginBtn} type="button">
                {t('войти')}
            </button>
        </div>
    );
}
