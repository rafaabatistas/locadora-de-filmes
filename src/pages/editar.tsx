import styles from '../styles/editar.module.scss';
import { useContext, useEffect } from 'react';

import type { Filmes } from '../types/type-filmes';

import { ModalDelete } from '../components/ModalDelete';
import { MovieContext } from '../contexts/MovieContext';
import { Modal } from '../components/Modal';
import { ButtonDeletar } from '../components/ButtonDeletar';
import { ButtonEditar } from '../components/ButtonEditar';
import { Titulo } from '../components/Titulo';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import { useState } from 'react';
import { BoxAdicionar } from '../components/BoxAdicionar';
import { BoxEditar } from '../components/BoxEditar';

type EditProps = {
  filmes: Filmes[];
};

export default function Home({ filmes }: EditProps) {
  const { setMoviesList, moviesList } = useContext(MovieContext);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({
    titulo: '',
    genero: '',
    sinopse: '',
    lancamento: '',
    idioma: '',
    diretor: '',
    imdb: '',
    avaliacao: '',
    legendado: '',
    url: '',
  });

  async function editarFilme(filme: Filmes) {
    const newMovies = moviesList.map((movie) => {
      if (movie.id === filme.id) {
        return (movie = { ...filme });
      } else {
        return movie;
      }
    });
    try {
      await api.put(`/locadora/${filme.id}/`, { ...filme });
      setMoviesList([...newMovies]);
      setIsOpenModalEdit(false);
    } catch (err) {
      setIsOpenModalEdit(false);
    }
  }

  useEffect(() => {
    setMoviesList(filmes);
  }, [setMoviesList, filmes]);

  return (
    <main className={styles.containerHome}>
      <Titulo>Editar os filmes locados</Titulo>
      <section className={styles.containerFilmes}>
        <BoxAdicionar />
        {moviesList.map((filme) => {
          return (
            <section className={styles.boxEditar} key={filme.id}>
              <BoxEditar filme={filme} index={filme.id}>
                <div
                  className={styles.boxButtonsEdit}
                  onClick={() => {
                    setIsOpenModalEdit(true);
                    setSelectedMovie(filme);
                  }}
                >
                  <ButtonEditar />
                </div>
                <div
                  className={styles.boxButtonsDelete}
                  onClick={() => {
                    setIsOpenModalDelete(true);
                    setSelectedMovie(filme);
                  }}
                >
                  <ButtonDeletar />
                </div>
              </BoxEditar>
            </section>
          );
        })}
        <Modal
          status={'Editar'}
          filme={selectedMovie}
          isOpen={isOpenModalEdit}
          handleSubmit={(filme) => editarFilme(filme)}
          handleClose={() => setIsOpenModalEdit(false)}
        />
        <ModalDelete
          filme={selectedMovie}
          isOpenModalDelete={isOpenModalDelete}
          handleClose={() => setIsOpenModalDelete(false)}
        />
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('locadora?_order=desc');

  const filmes = data.map((filme) => {
    return {
      id: filme.id,
      titulo: filme.titulo,
      genero: filme.genero,
      lancamento: filme.lancamento,
      idioma: filme.idioma,
      diretor: filme.diretor,
      sinopse: filme.sinopse,
      imdb: filme.imdb,
      avaliacao: filme.avaliacao,
      legendado: filme.legendado,
      url: filme.url,
    };
  });

  return {
    props: {
      filmes,
    },
  };
};
