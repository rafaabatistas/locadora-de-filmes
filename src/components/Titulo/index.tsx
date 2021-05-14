import styles from './styles.module.scss';

export function Titulo(props) {
    return (
        <header className={styles.containerHeader}>
            <h1>{props.children}</h1>
        </header>
    )
}