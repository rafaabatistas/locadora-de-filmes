import styles from './styles.module.scss';

import type { Filmes } from '../../types/type-filmes';

import React from 'react';

type BoxEditarProps = {
  filme: Filmes;
  index: number;
  children: React.ReactNode;
};

export function BoxEditar({ children, filme, index }: BoxEditarProps) {
  return (
    <section
      key={index}
      className={styles.boxFilmes}
      style={{ backgroundImage: `url(${filme.url})` }}
    >
      {children}
      <h2>{filme.titulo}</h2>
      <p>
        <strong>Diretor:</strong> {filme.diretor}
      </p>
      <p>
        <strong>Gênero:</strong> {filme.genero}
      </p>
      <p>
        <strong>Lançamento:</strong> {filme.lancamento}
      </p>
      <p>
        <strong>Idioma:</strong> {filme.idioma}
      </p>
      <p>
        <strong>Imagem:</strong> {filme.url}
      </p>
      <p>
        <strong>Sinopse:</strong> {filme.sinopse}
      </p>
    </section>
  );
}
