import styles from './styles.module.scss';

export function ButtonDeletar() {
  return (
    <main className={styles.buttonDelete}>
      <img src="./delete.svg" alt="Botão de deletar" />
    </main>
  );
}
