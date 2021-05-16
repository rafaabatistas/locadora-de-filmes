import styles from '../styles/editar.module.scss';

import { ModalDelete } from '../components/ModalDelete';
import { ModalEdit } from '../components/ModalEdit';
import { ButtonDeletar } from '../components/ButtonDeletar';
import { ButtonEditar } from '../components/ButtonEditar';
import { Titulo } from '../components/Titulo';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import { useState } from 'react';
import { BoxAdicionar } from '../components/BoxAdicionar';
import { BoxEditar } from '../components/BoxEditar';

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
const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
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
            <section className={styles.boxEditar}>
              <BoxEditar filme={filme} index={index}>
                <div className={styles.boxButtonsEdit} onClick={() => {
                  setIsOpenModalEdit(true)
                  setSelectedMovie(filme)}}>
                  <ButtonEditar />
                </div>
                <div className={styles.boxButtonsDelete} onClick={() => {
                  setIsOpenModalDelete(true);
                }}>
                  <ButtonDeletar />
                </div>
              </BoxEditar>
            </section>
          )
        })}
        <ModalEdit filme={selectedMovie} isOpenModalEdit={isOpenModalEdit} handleClose={() => setIsOpenModalEdit(!open)}/>
        <ModalDelete filme={selectedMovie} isOpenModalDelete={isOpenModalDelete} handleClose={() => setIsOpenModalDelete(!open)}/>
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
