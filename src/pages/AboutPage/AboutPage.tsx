import { useTranslation } from 'react-i18next';

import styles from './AboutPage.module.scss';

export default function AboutPage() {
    const { t } = useTranslation();

    return <div className={styles.root}>{t('О сайте')}</div>;
}
