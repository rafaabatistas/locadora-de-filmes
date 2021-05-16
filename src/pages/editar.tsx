import styles from '../styles/editar.module.scss';

import { ModalEdit } from '../components/ModalEdit';
import { ButtonDeletar } from '../components/ButtonDeletar';
import { ButtonEditar } from '../components/ButtonEditar';
import { Titulo } from '../components/Titulo';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import { useState } from 'react';
import { BoxAdicionar } from '../components/BoxAdicionar';

type Filmes = {
  titulo: string;
  genero: string;
  sinopse: string;
  lancamento: string;
  idioma: string;
  diretor: string;
  url: string;
}

type HomeProps = {
  filmes: Filmes[];
}

export default function Home({ filmes }: HomeProps) {
const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
const [selectedMovie, setSelectedMovie] = useState({
  titulo: '',
  genero: '',
  sinopse: '',
  lancamento: '',
  idioma: '',
  diretor: '',
  url: ''
});

  return (
    <main className={styles.containerHome}>
      <Titulo>Editar os filmes locados</Titulo>
      <section className={styles.containerFilmes}>
        <BoxAdicionar />
        {filmes.map((filme, index) => {
          return (
              <section key={index} className={styles.boxFilmes}>
                <div className={styles.boxButtons} >
                  <span onClick={() => {
                    setIsOpenModalEdit(true)
                    setSelectedMovie(filme)}}>
                    <ButtonEditar />
                  </span>
                  <span>
                    <ButtonDeletar />
                  </span>
                </div>
                <h2>{filme.titulo}</h2>
                <p><strong>Diretor:</strong> {filme.diretor}</p>
                <p><strong>Gênero:</strong> {filme.genero}</p>
                <p><strong>Lançamento:</strong> {filme.lancamento}</p>
                <p><strong>Idioma:</strong> {filme.idioma}</p>
                <p><strong>Imagem:</strong> {filme.url}</p>
                <p><strong>Sinopse:</strong> {filme.sinopse}</p>
              </section>
          )
        })}
        <ModalEdit filme={selectedMovie} isOpenModalEdit={isOpenModalEdit} handleClose={() => setIsOpenModalEdit(!open)}/>
      </section>
    </main>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('locadora?_order=desc');

  const filmes = data.map(filme => {
    return {
      id: filme.id, 
      titulo: filme.titulo,
      genero: filme.genero,
      lancamento: filme.lacamento,
      idioma: filme.idioma,
      diretor: filme.diretor,
      sinopse: filme.sinopse,
      url: filme.url
    }
  })
  
  return {
    props: {
      filmes
    }
  }
}
