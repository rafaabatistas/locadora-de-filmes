import { api } from '../../services/api';
import { useState, useEffect } from 'react';

import type { Filmes } from '../../pages/index';

import { InputRadio } from '../InputRadio';
import { ModalInput } from '../ModalInput';
import { InputDate } from '../InputDate';
import { InputText } from '../InputText';
import { InputTextArea } from '../InputTextArea';

import styles from './styles.module.scss';

type Modal = {
    isOpenModalEdit: boolean;
    handleClose: any;
    filme: any;
}


export function ModalEdit( { isOpenModalEdit, handleClose, filme }: Modal ) {
    const [selectedEditMovie, setSelectedEditMovie] = useState({
        id: filme.id,
        titulo: filme.titulo,
        genero: filme.genero,
        sinopse: filme.sinopse,
        lancamento: filme.lancamento,
        idioma: filme.idioma,
        diretor: filme.diretor,
        url: filme.url
      });

      useEffect(() => {
        setSelectedEditMovie(filme);
      }, [filme])


     async function editarFilme(id: Number, dados: Filmes) {
         try {
            const res = await api.put(`/locadora/${id}/`, {...dados});
            handleClose();
            window.location.reload();
         } catch (err) {
            handleClose();
        }
    }   

    return (
        <ModalInput isOpenModal={isOpenModalEdit} handleClose={handleClose} title={selectedEditMovie.titulo}>
            <form onSubmit={(e) => onSubmit(e)}>
                <InputText 
                    children={'Título'}
                    isRequired={true}
                    name='titulo'
                    value={selectedEditMovie.titulo}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['titulo']: e})}}
                />
                <InputText 
                    children={'Gênero'}
                    isRequired={true}
                    name='genero'
                    value={selectedEditMovie.genero}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['genero']: e})}}
                />
                <InputDate 
                    children={'Lançamento'}
                    name='lancamento'
                    value={selectedEditMovie.lancamento}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['lancamento']: e})}}
                />
                <InputText 
                    children={'Idioma'}
                    isRequired={true}
                    name='idioma'
                    value={selectedEditMovie.idioma}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['idioma']: e})}}
                />
                <InputText 
                    children={'Diretor'}
                    isRequired={false}
                    name='diretor'
                    value={selectedEditMovie.diretor}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['diretor']: e})}}
                />
                <InputRadio 
                    name={'legendado'}
                    isChecked={selectedEditMovie.legendado}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['legendado']: e})}}
                    >Legendado</InputRadio>
                <InputText 
                    children={'IMDB'}
                    isRequired={false}
                    name='imdb'
                    value={selectedEditMovie.imdb}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['imdb']: e})}}
                />
                <InputText 
                    children={'Avaliação'}
                    isRequired={false}
                    name='avaliacao'
                    value={selectedEditMovie.avaliacao}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['avaliacao']: e})}}
                />
                <InputText 
                    children={'URL'}
                    isRequired={true}
                    name='url'
                    value={selectedEditMovie.url}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['url']: e})}}
                />
                <InputTextArea 
                    children={'Sinopse'}
                    name={'sinopse'}
                    value={selectedEditMovie.sinopse}
                    inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['sinopse']: e})}}
                />
                <div className={styles.boxButtonCriar}>
                    <input className={styles.buttonCriar} type="submit" value="Editar"/>
                </div>
            </form> 
        </ModalInput>
    )
}