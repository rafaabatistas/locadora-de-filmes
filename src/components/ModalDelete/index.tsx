import styles from './styles.module.scss';
import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import type { Filmes } from '../../pages/index';

import { api } from '../../services/api';

type DeleteProps = {
  isOpenModalDelete: boolean;
  filme: Filmes;
  handleClose: () => void;
};

export function ModalDelete({
  filme,
  handleClose,
  isOpenModalDelete,
}: DeleteProps) {
  const { setMoviesList, moviesList } = useContext(MovieContext);

  async function removerFilme(id) {
    const newMovies = moviesList.filter((filme) => filme.id !== id);
    try {
      await api.delete(`/locadora/${id}`);
      setMoviesList([...newMovies]);
      handleClose();
    } catch (err) {
      console.log(err);
      handleClose();
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
        <h2>Quer mesmo deletar o filme</h2>
        <p>{filme.titulo}</p>
        <button type="button" onClick={() => removerFilme(filme.id)}>
          Deletar
        </button>
      </section>
    </>
  );
}
