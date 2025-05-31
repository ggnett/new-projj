import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter/ui/Counter';
import { Page } from 'shared/ui/Page';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <Page classNames={styles.root}>
            {t('О сайте')}
            <Counter />
        </Page>
    );
}
