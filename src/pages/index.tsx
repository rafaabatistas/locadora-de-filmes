import styles from '../styles/home.module.scss';

import type { Filmes } from '../types/type-filmes';

import { Titulo } from '../components/Titulo';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import { Modal } from '../components/ModalDetalhe';
import { useState } from 'react';

type HomeProps = {
  filmes: Filmes[];
};

export default function Home({ filmes }: HomeProps) {
  const { setMoviesList, moviesList } = useContext(MovieContext);
  const [isOpen, setIsOpen] = useState(false);
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
  }, [setMoviesList, filmes, moviesList]);

  return (
    <main className={styles.containerHome}>
      <Titulo>Todos os filmes locados</Titulo>
      <section className={styles.containerFilmes}>
        {moviesList.map((filme) => {
          return (
            <div
              key={filme.id}
              className={styles.boxFilmes}
              onClick={() => {
                setIsOpen(true);
                setSelectedMovie(filme);
              }}
            >
              <div className={styles.boxImage}>
                <img src={filme.url} alt="Capa do filme" />
              </div>
              <div className={styles.boxInfo}>
                <h2>{filme.titulo}</h2>
                <p>Diretor: {filme.diretor}</p>
              </div>
            </div>
          );
        })}
        <Modal
          filme={selectedMovie}
          isOpen={isOpen}
          handleClose={() => setIsOpen(!isOpen)}
        />
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('locadora?_order=desc');

  const dataLancamento = data.map((filme) => {
    if (filme.lancamento !== '') {
      return format(new Date(filme.lancamento), 'yyy');
    } else {
      return format(new Date(), 'yyy');
    }
  });

  const filmes = data.map((filme, index) => {
    return {
      id: filme.id,
      titulo: filme.titulo,
      genero: filme.genero,
      lancamento: dataLancamento[index],
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
