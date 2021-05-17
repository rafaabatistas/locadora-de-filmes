import { api } from '../../services/api';

import { InputText } from '../InputsTexts';
import { InputTextArea } from '../InputsTextArea';


import styles from './styles.module.scss';
import { useState } from 'react';

type Modal = {
    isOpen: boolean;
    handleClose: any;
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
        url: ''
    })



    async function AdicionarFilme() {
        movieList.push(addMovie);
        console.log(movieList);
        const res = await api.post(`/locadora/`, {...addMovie})
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
                style={{ display: `${isOpen ? 'flex' : 'none'}` }}
            />
            <section className={styles.boxModal}
                style={{display: `${isOpen ? 'flex' : 'none'}`}}>
                <div className={styles.boxButtonFechar}>
                    <button type="button" className={styles.buttonFechar} onClick={handleClose}>
                        <img src="./close.svg" alt="Botão de fechar" />
                    </button>
                </div>
                <h2>Adicionar</h2>
                <form>
                    <InputText 
                        children={'Título'}
                        name={'titulo'}
                        value={addMovie.titulo}
                        inputHandler={(e) => {setAddMovie({...addMovie, ['titulo']: e})}}
                    />
                    <InputText 
                        children={'Gênero'}
                        name={'genero'}
                        value={addMovie.genero}
                        inputHandler={(e) => {setAddMovie({...addMovie, ['genero']: e})}}
                    />
                    <InputText 
                        children={'lancamento'}
                        name={'lancamento'}
                        value={addMovie.lancamento}
                        inputHandler={(e) => {setAddMovie({...addMovie, ['lancamento']: e})}}
                    />
                    <InputText 
                        children={'Idioma'}
                        name={'idioma'}
                        value={addMovie.idioma}
                        inputHandler={(e) => {setAddMovie({...addMovie, ['idioma']: e})}}
                        />
                    <InputText 
                        children={'Diretor'}
                        name={'diretor'}
                        value={addMovie.diretor}
                        inputHandler={(e) => {setAddMovie({...addMovie, ['diretor']: e})}}
                        />
                    <InputText 
                        children={'URL'}
                        name={'url'}
                        value={addMovie.url}
                        inputHandler={(e) => {setAddMovie({...addMovie, ['url']: e})}}
                        />                    
                    <InputTextArea 
                        children={'Sinopse'}
                        name={'sinopse'}
                        value={addMovie.sinopse}
                        inputHandler={(e) => {setAddMovie({...addMovie, ['sinopse']: e})}}
                     />
                    <div className={styles.boxButtonCriar}>
                        <button 
                            className={styles.buttonCriar} 
                            type="button"
                            onClick={() => AdicionarFilme()}
                        >Adicionar</button>
                    </div>
                </form>
            </section>
        </>
    )
}