import styles from './styles.module.scss';

import animationData from './error.json';

import Lottie from 'react-lottie';

import type { DeleteProps } from '../ModalDelete';

export function MessageError({ isOpenModalDelete, handleClose }: DeleteProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <section
        className={styles.contentBackground}
        style={{ display: `${isOpenModalDelete ? 'flex' : 'none'}` }}
      />
      <section
        className={styles.boxModal}
        style={{ display: `${isOpenModalDelete ? 'flex' : 'none'}` }}
      >
        <div className={styles.ContentAnimation}>
          <Lottie options={defaultOptions} height={250} width={400} />
        </div>
        <h2>Opss! Tente novamente mais tarde :( </h2>
        <button type="button" onClick={handleClose}>
          Fechar
        </button>
      </section>
    </>
  );
}
