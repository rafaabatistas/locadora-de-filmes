import styles from './styles.module.scss';

import { api } from '../../services/api';
import React from 'react';

type DeleteProps = {
    isOpenModalDelete: boolean;
    filme: any,
    handleClose: any;
}

export function ModalDelete({ filme, handleClose, isOpenModalDelete }: DeleteProps) {

     function removerFilme(id) {
       const res = api.delete(`/locadora/${id}`)
            .then((res) => {
                console.log(res.status);
                handleClose();
                window.location.reload();
            }).catch(err => { 
                console.log(err);
                handleClose();
            });
        console.log(res)
        }

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
                <h2>Quer mesmo deletar o filme</h2>
                <p>{filme.titulo}</p>
                <button type="button" onClick={() => removerFilme(filme.id)}>Deletar</button> 
            </section>
        </>
    )
}