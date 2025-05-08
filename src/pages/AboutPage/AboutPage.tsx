import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter/ui/Counter';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className={styles.root}>
            {t('О сайте')}
            <Counter />
        </div>
    );
}
