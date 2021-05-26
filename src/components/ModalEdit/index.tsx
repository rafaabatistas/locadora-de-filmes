import { api } from '../../services/api';
import { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';

import type { Filmes } from '../../types/type-filmes';

import { InputRadio } from '../InputRadio';
import { ModalInput } from '../ModalInput';
import { InputDate } from '../InputDate';
import { InputText } from '../InputText';
import { InputTextArea } from '../InputTextArea';

import styles from './styles.module.scss';

export function ModalEdit({ isOpenModalEdit, handleClose, filme }) {
  const { setMoviesList, moviesList } = useContext(MovieContext);
  const [selectedEditMovie, setSelectedEditMovie] = useState({
    id: filme.id,
    titulo: filme.titulo,
    genero: filme.genero,
    sinopse: filme.sinopse,
    lancamento: filme.lancamento,
    idioma: filme.idioma,
    diretor: filme.diretor,
    imdb: filme.imdb,
    legendado: filme.legendado,
    avaliacao: filme.avaliacao,
    url: filme.url,
  });

  useEffect(() => {
    setSelectedEditMovie(filme);
  }, [filme]);

  function onSubmit(e) {
    e.preventDefault();
    editarFilme(filme.id, selectedEditMovie);
  }

  async function editarFilme(id: string, dados: Filmes) {
    const newMovies = moviesList.map((movie) => {
      if (movie.id === id) {
        return (movie = { ...selectedEditMovie });
      } else {
        return movie;
      }
    });
    console.log(newMovies);
    try {
      await api.put(`/locadora/${id}/`, { ...dados });
      setMoviesList([...newMovies]);
      handleClose();
    } catch (err) {
      handleClose();
    }
  }

  return (
    <ModalInput
      isOpenModal={isOpenModalEdit}
      handleClose={handleClose}
      title={selectedEditMovie.titulo}
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <InputText
          isRequired={true}
          name="titulo"
          value={selectedEditMovie.titulo}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['titulo']: e });
          }}
        >
          Título
        </InputText>
        <InputText
          isRequired={true}
          name="genero"
          value={selectedEditMovie.genero}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['genero']: e });
          }}
        >
          Gênero
        </InputText>
        <InputDate
          name="lancamento"
          value={selectedEditMovie.lancamento}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['lancamento']: e });
          }}
        >
          Lançamento
        </InputDate>
        <InputText
          isRequired={true}
          name="idioma"
          value={selectedEditMovie.idioma}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['idioma']: e });
          }}
        >
          Idioma
        </InputText>
        <InputText
          isRequired={false}
          name="diretor"
          value={selectedEditMovie.diretor}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['diretor']: e });
          }}
        >
          Diretor
        </InputText>
        <InputRadio
          name={'legendado'}
          isChecked={selectedEditMovie.legendado}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['legendado']: e });
          }}
        >
          Legendado
        </InputRadio>
        <InputText
          isRequired={false}
          name="imdb"
          value={selectedEditMovie.imdb}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['imdb']: e });
          }}
        >
          IMDB
        </InputText>
        <InputText
          isRequired={false}
          name="avaliacao"
          value={selectedEditMovie.avaliacao}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['avaliacao']: e });
          }}
        >
          Avaliação
        </InputText>
        <InputText
          isRequired={true}
          name="url"
          value={selectedEditMovie.url}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['url']: e });
          }}
        >
          URL
        </InputText>
        <InputTextArea
          name={'sinopse'}
          value={selectedEditMovie.sinopse}
          inputHandler={(e) => {
            setSelectedEditMovie({ ...selectedEditMovie, ['sinopse']: e });
          }}
        >
          Sinopse
        </InputTextArea>
        <div className={styles.boxButtonCriar}>
          <input className={styles.buttonCriar} type="submit" value="Editar" />
        </div>
      </form>
    </ModalInput>
  );
}
