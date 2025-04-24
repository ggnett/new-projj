import styles from './NavBar.module.scss';
import AppLink, { themes } from 'shared/ui/AppLink/AppLink';

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.links}>
                <AppLink to="/" theme={themes.SECONDARY}>MAIN</AppLink>
                <AppLink to="/about" theme={themes.SECONDARY}>ABOUT</AppLink>
            </div>
        </div>
    );
}
