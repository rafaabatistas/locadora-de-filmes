import styles from './styles.module.scss';

export function BoxAdicionar() {
    return(
        <div className={styles.boxFilmes} >
            <div className={styles.boxAdicionar} >
                <div className={styles.boxIcon}>
                    <img src="./add.svg" alt="Ícone de adicionar" />
                </div>
            </div>
            <h2>Adicionar Filme</h2>
        </div>
    )
}