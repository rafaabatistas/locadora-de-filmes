import styles from './styles.module.scss';

import animationData from './success.json';

import Lottie from 'react-lottie';

import type { DeleteProps } from '../ModalDelete';

export function MessageSuccess({
  isOpenModalDelete,
  handleClose,
  status,
  filme,
}: DeleteProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
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
        <h2>
          {filme.titulo} {status} com sucesso.
        </h2>
        <button type="button" onClick={handleClose}>
          Fechar
        </button>
      </section>
    </>
  );
}
