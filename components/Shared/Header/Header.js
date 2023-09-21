import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <div className={styles.padd}>
            <h1 className={styles.title}>
                Spesifikasi Handphone
            </h1>
        </div>
    )
}

export default Header;