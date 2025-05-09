/* eslint-disable comma-dangle */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import AppLink, { themes } from 'shared/ui/AppLink/AppLink';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'widgets/Modal';
import { LoginModal } from 'features/AuthByUsername';
import styles from './NavBar.module.scss';

export default function NavBar() {
    const [modalOpen, setModalOpen] = useState(false);

    const { t } = useTranslation();

    const visibleHundler = useCallback(() => {
        setModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={styles.navBar}>
            <button className={styles.entButton} onClick={visibleHundler} type="button">
                {t('войти')}
            </button>
            {createPortal(<LoginModal isOpen={modalOpen} setOpen={visibleHundler} />, document.body)}
        </div>
    );
}
