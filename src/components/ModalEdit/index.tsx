import { api } from '../../services/api';
import { useState, useEffect } from 'react';

import { InputText } from '../InputText';
import { InputTextArea } from '../InputTextArea';

import styles from './styles.module.scss';
import { InputDate } from '../InputDate';

type Modal = {
    isOpenModalEdit: boolean;
    handleClose: any;
    filme: any;
}

type Edit = {
    id: number;
    titulo: string;
    genero: string;
    sinopse: string;
    lancamento: string;
    idioma: string;
    diretor: string;
    url: string;
}

type EditProps = {
    id: number;
    dados: Edit;
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


     function EditarFilme(id, dados) {
        const res = api.put(`/locadora/${id}/`, {...dados})
            .then((res) => {
                console.log(res.status);
                handleClose();
                window.location.reload();
            }).catch((err) => {
                console.log(err)
                handleClose();
            })
            console.log(res);
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
                                EditarFilme(filme.id, selectedEditMovie)
                        }}>Confimar</button>
                    </div> 
                </form>
            </section>
        </>
    )
}