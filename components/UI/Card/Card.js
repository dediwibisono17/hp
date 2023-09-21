import styles from './Card.module.scss';

const card = (props) => {
    const { children } = props;
    return (
        <>
            <div className={styles.card}>
                {children}
            </div>
        </>
    )
}

export default card;