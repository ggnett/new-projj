/* eslint-disable comma-dangle */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import AppLink, { themes } from 'shared/ui/AppLink/AppLink';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'widgets/Modal';
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
            {createPortal(
                <Modal isOpen={modalOpen} setOpen={visibleHundler}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia autem nulla et vel veniam est fugit ducimus, possimus quisquam
                    neque necessitatibus atque, quas magni quis laudantium pariatur nemo explicabo eum.
                </Modal>,
                document.body
            )}
        </div>
    );
}
