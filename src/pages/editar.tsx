import styles from '../styles/editar.module.scss';
import { useContext, useEffect } from 'react';
import type { Filmes } from '../pages/index';

import { ModalDelete } from '../components/ModalDelete';
import { MovieContext } from '../contexts/MovieContext';
import { ModalEdit } from '../components/ModalEdit';
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
        <ModalEdit
          filme={selectedMovie}
          isOpenModalEdit={isOpenModalEdit}
          handleClose={() => setIsOpenModalEdit(!open)}
        />
        <ModalDelete
          filme={selectedMovie}
          isOpenModalDelete={isOpenModalDelete}
          handleClose={() => setIsOpenModalDelete(!open)}
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
