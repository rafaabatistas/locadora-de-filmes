import { useState } from 'react';
import styles from './styles.module.scss';

type DeleteProps = {
    isOpenModalDelete: boolean;
    filme: any,
    handleClose: any;
}

export function ModalDelete({ filme, handleClose, isOpenModalDelete }: DeleteProps) {
    const [deleteFilme, setDeleteFilme] = useState([])

    return(
        <>
            <section className={styles.contentBackground} 
                style={{display: `${isOpenModalDelete ? 'flex' : 'none'}`}}
            />
            <section className={styles.boxModal}
                style={{display: `${isOpenModalDelete ? 'flex' : 'none'}`}}
            >
                <div className={styles.boxButtonFechar}>
                    <button className={styles.buttonFechar} onClick={handleClose}>
                        <img src="./close.svg" alt="Botão de fechar" />
                    </button>
                </div>
                <h2>Quer mesmo deletar o filme: </h2>
                <p>{filme.titulo}</p>
                <button>Deletar</button> 
            </section>
        </>

    )
}