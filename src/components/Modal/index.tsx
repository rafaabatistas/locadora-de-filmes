import styles from './styles.module.scss';

import { useState, useEffect } from 'react';

import { InputDate } from '../InputDate';
import { InputText } from '../InputText';
import { ModalInput } from '../ModalInput';
import { InputRadio } from '../InputRadio';
import { InputTextArea } from '../InputTextArea';

export function Modal({ isOpen, handleClose, filme, handleSubmit, status }) {
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

  return (
    <ModalInput
      isOpenModal={isOpen}
      handleClose={handleClose}
      title={selectedEditMovie.titulo}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(selectedEditMovie);
        }}
      >
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
          <input className={styles.buttonCriar} type="submit" value={status} />
        </div>
      </form>
    </ModalInput>
  );
}
