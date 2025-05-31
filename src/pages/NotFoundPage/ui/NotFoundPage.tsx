import { useTranslation } from 'react-i18next';

import { Page } from 'shared/ui/Page';
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
    const { t } = useTranslation();

    return <Page classNames={styles.root}>{t('Страница не найдена')}</Page>;
}
