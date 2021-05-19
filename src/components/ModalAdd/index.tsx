import { api } from '../../services/api';

import { InputText } from '../InputText';
import { InputTextArea } from '../InputTextArea';

import styles from './styles.module.scss';
import { useState } from 'react';
import { ModalInput } from '../ModalInput';
import { InputDate } from '../InputDate';
import { InputRadio } from '../InputRadio';

type Modal = {
    isOpen: boolean;
    handleClose: () => void;
    movieList: any;
}

export function ModalAdd( { isOpen, handleClose, movieList }: Modal ) {
    const [addMovie, setAddMovie] = useState({
        id: movieList.length,
        titulo: '',
        genero: '',
        sinopse: '',
        lancamento: '',
        idioma: '',
        diretor: '',
        imdb: '',
        avaliacao: '',
        legendado: 'true',
        url: ''
    })


    function onSubmit(e) {
        e.preventDefault();
        adicionarFilme();
    }

    async function adicionarFilme() {
        try { 
            movieList.push(addMovie);
            await api.post(`/locadora/`, {...addMovie})
            handleClose();
            window.location.reload();
        } catch (err) {
            console.log(err)
            handleClose();
        }
    }

    return (
        <ModalInput isOpenModal={isOpen} handleClose={handleClose} title={'Adicionar'}>
            <form onSubmit={(e) => onSubmit(e)}>
                <InputText 
                    name={'titulo'}
                    isRequired={true}
                    value={addMovie.titulo}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['titulo']: e})}}
                >Título</InputText>
                <InputText 
                    name={'genero'}
                    isRequired={true}
                    value={addMovie.genero}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['genero']: e})}}
                >Gênero</InputText>
                <InputDate 
                    name={'lancamento'}
                    value={addMovie.lancamento}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['lancamento']: e})}}
                >Lançamento</InputDate>
                <InputText 
                    name={'idioma'}
                    isRequired={true}
                    value={addMovie.idioma}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['idioma']: e})}}
                    >Idioma</InputText>
                <InputText 
                    name={'diretor'}
                    isRequired={false}
                    value={addMovie.diretor}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['diretor']: e})}}
                    >Diretor</InputText>    
                <InputRadio 
                    name={'legendado'}
                    isChecked={addMovie.legendado}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['legendado']: e})}}
                    >Legendado</InputRadio>
                <InputText 
                    isRequired={false}
                    name='imdb'
                    value={addMovie.imdb}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['imdb']: e})}}
                >IMDB</InputText>
                <InputText 
                    isRequired={false}
                    name='avaliacao'
                    value={addMovie.avaliacao}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['avaliacao']: e})}}
                >Avaliação</InputText>
                <InputText 
                    name={'url'}
                    value={addMovie.url}
                    isRequired={true}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['url']: e})}}
                    >URL</InputText>                    
                <InputTextArea 
                    name={'sinopse'}
                    value={addMovie.sinopse}
                    inputHandler={(e) => {setAddMovie({...addMovie, ['sinopse']: e})}}
                    >Sinopse</InputTextArea>

                <div className={styles.boxButtonCriar}>
                    <input className={styles.buttonCriar} type="submit" value="Adicionar" />
                </div>
            </form>
        </ModalInput>   
    )
}