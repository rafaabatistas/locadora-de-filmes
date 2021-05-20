import styles from './styles.module.scss';

import React from 'react';

type Modal = {
  isOpenModal: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: React.ReactNode;
};

export function ModalInput({
  isOpenModal,
  handleClose,
  children,
  title,
}: Modal) {
  return (
    <>
      <section
        className={styles.contentBackground}
        style={{ display: `${isOpenModal ? 'flex' : 'none'}` }}
      />
      <section
        className={styles.boxModal}
        style={{ display: `${isOpenModal ? 'flex' : 'none'}` }}
      >
        <div className={styles.boxButtonFechar}>
          <button className={styles.buttonFechar} onClick={handleClose}>
            <img src="./close.svg" alt="Botão de fechar" />
          </button>
        </div>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
}
