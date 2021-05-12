import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.containerHeader}>
            <h1>Store</h1>
            <div className={styles.boxBuntton}>
                <button>Todos</button>
                <button>Editar</button>
            </div>
        </header>
    )
}