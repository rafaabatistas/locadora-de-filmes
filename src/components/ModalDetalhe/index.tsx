import styles from './styles.module.scss';

type Modal = { 
    isOpen: boolean;
    filme: any;
    handleClose: any;
}

export function Modal({ filme, isOpen, handleClose }: Modal) {

    return (
        <>
            <main className={styles.boxModalClick} 
                style={{display: `${isOpen ? 'flex' : 'none'}`}} />

            <main key={filme.titulo} className={styles.boxModal} 
                style={{display: `${isOpen ? 'flex' : 'none'}` }}>

                <div className={styles.boxButtonFechar}>
                    <button className={styles.buttonFechar} onClick={handleClose}>
                        <img src="./close.svg" alt="Botão de fechar" />
                    </button>
                </div>

                <section className={styles.boxDetalhes}>
                    <table cellSpacing={0} key={filme.titulo}>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Título:</strong>
                                </td>
                                <td>{filme.titulo}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Gênero:</strong>
                                </td>
                                <td>{filme.genero}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Lançamento:</strong>
                                </td>
                                <td>{filme.lancamento}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Idioma:</strong>
                                </td>
                            <td>{filme.idioma}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Diretor:</strong>
                                </td>
                                <td>{filme.diretor}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Legendado:</strong>
                                </td>
                                <td>{filme.legendado}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>IMDB:</strong>
                                </td>
                                <td><a href={filme.imdb}>Link</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Avaliação:</strong>
                                </td>
                                <td>{filme.avaliacao}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Imagem:</strong>
                                </td>
                                <td>
                                    <p>{filme.url}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Sinopse:</strong> 
                                </td>
                                <td>
                                    <p>{filme.sinopse}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}


