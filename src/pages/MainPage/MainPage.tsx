import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

import { Counter } from 'entities/Counter/ui/Counter';
import styles from './MainPage.module.scss';

export default function MainPage() {
    const { t } = useTranslation();

    return (
        <div className={styles.root}>
            {/* dlia testov */}
            {/* <BugButton /> */}
            {t('Главная страница')}
            <Counter />
        </div>
    );
}
