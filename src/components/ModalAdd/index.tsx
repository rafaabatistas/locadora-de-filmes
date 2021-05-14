import styles from './styles.module.scss';

type Modal = {
    isOpen: boolean;
    handleClose: any;
}

export function ModalAdd( { isOpen, handleClose }: Modal ) {
    return (
        <>
            <section className={styles.contentBackground} 
                style={{ display: `${isOpen ? 'flex' : 'none'}` }}
            />
            <section className={styles.boxModal}
                style={{display: `${isOpen ? 'flex' : 'none'}`}}>
                <div className={styles.boxButtonFechar}>
                    <button className={styles.buttonFechar} onClick={handleClose}>
                        <img src="./close.svg" alt="Botão de fechar" />
                    </button>
                </div>
                <h2>Adicionar</h2>
                <form>
                    <div className={styles.boxInput}>
                        <span>Título: </span>
                        <input type="text" name="titulo" id="titulo" />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Gênero: </span>
                        <input type="text" name="genero" id="genero" />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Lançamento: </span>
                        <input type="text" name="lancamento" id="lancamento" />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Idioma: </span>
                        <input type="text" name="idioma" id="idioma" />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Diretor: </span>
                        <input type="text" name="diretor" id="diretor" />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Imagem: </span>
                        <input type="text" name="image" id="image" />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Sinopse: </span>
                        <textarea id="sinopse" name="sinopse" />
                    </div>
                    <div className={styles.boxButtonCriar}>
                        <button className={styles.buttonCriar}>Criar</button>
                    </div>
                </form>
            </section>
        </>
    )
}