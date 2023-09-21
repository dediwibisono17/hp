import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <div>
            <h1 className={styles.title}>
                Handphone
            </h1>
        </div>
    )
}

export default Header;