import styles from './styles.module.scss';

import { useState, useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';

import type { Filmes } from '../../types/type-filmes';

import { MessageSuccess } from '../MessageSuccess';
import { MessageError } from '../MessageError';

import { api } from '../../services/api';

export type DeleteProps = {
  isOpenModalDelete: boolean;
  status?: string;
  filme?: Filmes;
  handleClose: () => void;
};

export function ModalDelete({
  filme,
  handleClose,
  isOpenModalDelete,
}: DeleteProps) {
  const { setMoviesList, moviesList } = useContext(MovieContext);
  const [openMesageSuccess, setOpenMesageSuccess] = useState(false);
  const [openMesageError, setOpenMesageError] = useState(false);

  async function removerFilme(id) {
    const newMovies = moviesList.filter((filme) => filme.id !== id);
    try {
      await api.delete(`/locadora/${id}`);
      setMoviesList([...newMovies]);
      handleClose();
      setOpenMesageSuccess(true);
    } catch (err) {
      handleClose();
      setOpenMesageError(true);
    }
  }

  return (
    <>
      <section
        className={styles.contentBackground}
        style={{ display: `${isOpenModalDelete ? 'flex' : 'none'}` }}
      />
      <section
        className={styles.boxModal}
        style={{ display: `${isOpenModalDelete ? 'flex' : 'none'}` }}
      >
        <div className={styles.boxButtonFechar}>
          <button className={styles.buttonFechar} onClick={handleClose}>
            <img src="./close.svg" alt="Botão de fechar" />
          </button>
        </div>
        <h2>Quer mesmo deletar esse filme:</h2>
        <p>{filme.titulo}</p>
        <button type="button" onClick={() => removerFilme(filme.id)}>
          Deletar
        </button>
      </section>

      <MessageSuccess
        handleClose={() => setOpenMesageSuccess(false)}
        isOpenModalDelete={openMesageSuccess}
        status={'deletado'}
        filme={filme}
      />
      <MessageError
        handleClose={() => setOpenMesageError(false)}
        isOpenModalDelete={openMesageError}
      />
    </>
  );
}
