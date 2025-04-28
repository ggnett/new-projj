import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
    const { t } = useTranslation();

    return <div className={styles.root}>{t('Страница не найдена')}</div>;
}
