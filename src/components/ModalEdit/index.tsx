import { api } from '../../services/api';
import { useState, useEffect } from 'react';

import type { Filmes } from '../../pages/index';

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
        <>
            <section className={styles.contentBackground} 
                style={{ display: `${isOpenModalEdit ? 'flex' : 'none'}` }}
            />
            <section className={styles.boxModal}
                style={{display: `${isOpenModalEdit ? 'flex' : 'none'}`}}>
                <div className={styles.boxButtonFechar}>
                    <button className={styles.buttonFechar} onClick={handleClose}>
                        <img src="./close.svg" alt="Botão de fechar" />
                    </button>
                </div>
                <h2>Editar</h2>
                <form>
                    <InputText 
                        children={'Título'}
                        name='titulo'
                        value={selectedEditMovie.titulo}
                        inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['titulo']: e})}}
                    />
                    <InputText 
                        children={'Gênero'}
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
                        name='idioma'
                        value={selectedEditMovie.idioma}
                        inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['idioma']: e})}}
                    />
                    <InputText 
                        children={'Diretor'}
                        name='diretor'
                        value={selectedEditMovie.diretor}
                        inputHandler={(e) => {setSelectedEditMovie({...selectedEditMovie, ['diretor']: e})}}
                    />
                    <InputText 
                        children={'URL'}
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
                        <button 
                            className={styles.buttonCriar} 
                            type="button" 
                            onClick={() => {
                                editarFilme(filme.id, selectedEditMovie)
                        }}>Confimar</button>
                    </div> 
                </form>
            </section>
        </>
    )
}