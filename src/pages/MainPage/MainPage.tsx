import { useTranslation } from 'react-i18next';

import styles from './MainPage.module.scss';

export default function MainPage() {
    const { t } = useTranslation();

    return <div className={styles.root}>{t('Главная страница')}</div>;
}
