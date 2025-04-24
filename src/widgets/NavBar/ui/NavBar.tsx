import { useTranslation } from 'react-i18next';
import styles from './NavBar.module.scss';
import AppLink, { themes } from 'shared/ui/AppLink/AppLink';

export default function NavBar() {

    const { t } = useTranslation();


    return (
        <div className={styles.navBar}>
            <div className={styles.links}>
                <AppLink to="/" theme={themes.SECONDARY}>{t('Главная')}</AppLink>
                <AppLink to="/about" theme={themes.PRIMARY}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
}
