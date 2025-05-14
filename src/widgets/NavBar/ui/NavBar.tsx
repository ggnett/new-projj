/* eslint-disable comma-dangle */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import AppLink, { themes } from 'shared/ui/AppLink/AppLink';
import { memo, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'widgets/Modal';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { fetchProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './NavBar.module.scss';

const NavBar = memo(() => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);

    const { t } = useTranslation();

    const visibleHundler = useCallback(() => {
        setModalOpen((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={styles.navBar}>
                <button className={styles.entButton} onClick={onLogout} type="button">
                    {t('выйти')}
                </button>
                {createPortal(<LoginModal isOpen={modalOpen} setOpen={visibleHundler} />, document.body)}
            </div>
        );
    }

    return (
        <div className={styles.navBar}>
            <button className={styles.entButton} onClick={visibleHundler} type="button">
                {t('войти')}
            </button>
            {createPortal(<LoginModal isOpen={modalOpen} setOpen={visibleHundler} />, document.body)}
        </div>
    );
});

export default NavBar;
