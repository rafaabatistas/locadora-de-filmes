import styles from '../styles/home.module.scss';

import { Titulo } from '../components/Titulo';
import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import { Modal } from '../components/ModalDetalhe';
import { useState } from 'react';

export type Filmes = {
    id?: number;
    titulo: string;
    genero: string;
    sinopse: string;
    lancamento: string;
    idioma: string;
    diretor: string;
    imdb: string;
    avaliacao: string;
    legendado: string;
    url: string;
}

type HomeProps = {
  filmes: Filmes[];
}

export default function Home({ filmes }: HomeProps) {
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
        url: ''
    });

    return (
        <main className={styles.containerHome}>
            <Titulo>Todos os filmes locados</Titulo>
            <section className={styles.containerFilmes}>
                {filmes.map((filme, index) => {
                    return (
                        <div key={index} className={styles.boxFilmes} onClick={() => {
                        setIsOpen(true);
                        setSelectedMovie(filme);
                        }} >
                        <div className={styles.boxImage}>
                            <img src={filme.url} alt="Capa do filme" />
                        </div>
                        <div className={styles.boxInfo}>
                            <h2>{filme.titulo}</h2>
                            <p>Diretor: {filme.diretor}</p>
                        </div>
                        </div>
                    )
                })}
                <Modal filme={selectedMovie} isOpen={isOpen} handleClose={() => setIsOpen(!open)} />
            </section>
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await api.get('locadora?_order=desc');

    const filmes = data.map(filme => {
      return { 
        titulo: filme.titulo,
        genero: filme.genero,
        lancamento: format(new Date(filme.lancamento), 'yyy'),
        idioma: filme.idioma,
        diretor: filme.diretor,
        sinopse: filme.sinopse,
        imdb: filme.imdb,
        avaliacao: filme.avaliacao,
        legendado: filme.legendado,
        url: filme.url
        }
    })
  
    return {
        props: {
            filmes
        }
    }
}
