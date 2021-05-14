import styles from './styles.module.scss';

type Modal = {
    isOpenModalEdit: boolean;
    handleClose: any;
    filme: any;
}

export function ModalEdit( { isOpenModalEdit, handleClose, filme }: Modal ) {
    return (
        <>
            <section className={styles.contentBackground} 
                style={{ display: `${isOpenModalEdit ? 'flex' : 'none'}` }}
            />
            <section className={styles.boxModal}
                style={{display: `${isOpenModalEdit ? 'flex' : 'none'}`}}>
                <div className={styles.boxButtonFechar}>
                    <button className={styles.buttonFechar} onClick={handleClose}>
                        <img src="./close.svg" alt="Botão de fechar" />
                    </button>
                </div>
                <h2>Editar</h2>
                <form>
                    <div className={styles.boxInput}>
                        <span>Título: </span>
                        <input type="text" name="titulo" id="titulo" value={filme.titulo} />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Gênero: </span>
                        <input type="text" name="genero" id="genero" value={filme.genero} />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Lançamento: </span>
                        <input type="text" name="lancamento" id="lancamento" value={filme.lancamento} />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Idioma: </span>
                        <input type="text" name="idioma" id="idioma" value={filme.idioma} />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Diretor: </span>
                        <input type="text" name="diretor" id="diretor" value={filme.diretor} />
                    </div>
                    <div className={styles.boxInput}>
                        <span>Imagem: </span>
                        <input type="text" name="image" id="image" value={filme.url} />
                    </div>
                    <div className={styles.boxInputTextArea}>
                        <span>Sinopse: </span>
                        <textarea id="sinopse" name="sinopse" value={filme.sinopse} />
                    </div>
                    <div className={styles.boxButtonCriar}>
                        <button className={styles.buttonCriar}>Confimar</button>
                    </div>
                </form>
            </section>
        </>
    )
}