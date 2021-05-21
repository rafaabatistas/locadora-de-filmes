import styles from './styles.module.scss';

import type { Filmes } from '../../pages/index';

import { ModalAdd } from '../ModalAdd';
import { useState } from 'react';

type ListProps = {
  list: Filmes[];
};

export function BoxAdicionar({ list }: ListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={styles.boxFilmes}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className={styles.boxAdicionar}>
          <div className={styles.boxIcon}>
            <img src="./add.svg" alt="Ícone de adicionar" />
          </div>
        </div>
        <h2>Adicionar Filme</h2>
      </div>
      <ModalAdd
        isOpen={isOpen}
        handleClose={() => setIsOpen(!isOpen)}
        movieList={list}
      />
    </>
  );
}
