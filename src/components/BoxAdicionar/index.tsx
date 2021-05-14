import styles from './styles.module.scss';

import { ModalAdd } from '../ModalAdd';
import { useState } from 'react';

export function BoxAdicionar() {
    const [isOpen, setIsOpen] = useState(false);

    

    return(
        <>
            <div className={styles.boxFilmes} onClick={() => {setIsOpen(true)}}>
                <div className={styles.boxAdicionar} >
                    <div className={styles.boxIcon}>
                        <img src="./add.svg" alt="Ícone de adicionar" />
                    </div>
                </div>
                <h2>Adicionar Filme</h2>
            </div>
            <ModalAdd isOpen={isOpen} handleClose={() => setIsOpen(!open)}/>
        </>
    )
}