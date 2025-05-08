/* eslint-disable implicit-arrow-linebreak */
import { Theme } from 'app/providers/theme/ThemeContext';
import ThemeProvider from 'app/providers/theme/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import styles from '../../../../app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => {
    const themeSt = theme === Theme.DARK ? styles.dark : styles.normal;
    return (
        <StoreProvider>
            <ThemeProvider>
                <div className={`${styles.app} ${themeSt}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        </StoreProvider>
    );
};
