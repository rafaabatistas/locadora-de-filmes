import styles from '../styles/home.module.scss';

import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';

type Filmes = {
  titulo: string;
  genero: string;
  sinopse: string;
  lancamento: string;
  idioma: string;
  diretor: string;
}

type HomeProps = {
  filme: Filmes[];
}

export default function Home(props: HomeProps) {
  return (
    <main className={styles.containerHome}>
      <header>
        <h1>Todos os filmes locados</h1>
      </header>
      <section className={styles.containerFilmes}>
        {props.map(filme => {
          return (
            <div className={styles.boxFilmes}>
              <h2>{filme.titulo}</h2>
              <p>{filme.sinopse}</p>
            </div>
          )
        })}
        <div className={styles.boxFilmes}>
          <h2>Interestrelar </h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod beatae labore ipsum quae dolorum doloremque eius natus, praesentium voluptates hic error explicabo. Voluptatum aperiam tempora nisi nemo voluptas debitis consequatur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ex. lorem fa-rotate-27 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque exercitationem eius eveniet quia ex nulla quisquam rem praesentium assumenda!</p>
        </div>
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
      lancamento: filme.lacamento,
      idioma: filme.idioma,
      diretor: filme.diretor,
      sinopse: filme.sinopse,
    }
  })
  
  return {
    props: {
      locadora: data,
    }
  }
}
