import styles from './styles.module.scss';

import { Modal } from '../Modal';
import { MovieContext } from '../../contexts/MovieContext';
import { criarHash } from '../../services/hash';
import { api } from '../../services/api';
import { useState, useContext } from 'react';

export function BoxAdicionar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setMoviesList, moviesList } = useContext(MovieContext);
  const [newMovie, setNewMovie] = useState({
    id: criarHash(),
    titulo: '',
    genero: '',
    sinopse: '',
    lancamento: '',
    idioma: '',
    diretor: '',
    imdb: '',
    avaliacao: '',
    legendado: 'true',
    url: '',
  });

  async function adicionarFilme(filme) {
    const newMovies = moviesList;
    newMovies.push({ ...filme });
    try {
      await api.post(`/locadora/`, { ...filme });
      setMoviesList([...newMovies]);
      setNewMovie({
        id: criarHash(),
        titulo: '',
        genero: '',
        sinopse: '',
        lancamento: '',
        idioma: '',
        diretor: '',
        imdb: '',
        avaliacao: '',
        legendado: 'true',
        url: '',
      });
      setIsOpen(false);
    } catch (err) {
      setIsOpen(false);
    }
  }

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
      <Modal
        status={'Adicionar'}
        isOpen={isOpen}
        filme={newMovie}
        handleClose={() => setIsOpen(!isOpen)}
        handleSubmit={(filme) => adicionarFilme(filme)}
      />
    </>
  );
}
