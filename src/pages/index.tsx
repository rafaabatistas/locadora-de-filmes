import styles from '../styles/home.module.scss';

export default function Home(props) {
  return (
    <main className={styles.containerHome}>
      <header>
        <h1>Todos os filmes locados</h1>
      </header>
      <section className={styles.containerFilmes}>
        <div className={styles.boxFilmes}>
          <h2>Interestrelar </h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod beatae labore ipsum quae dolorum doloremque eius natus, praesentium voluptates hic error explicabo. Voluptatum aperiam tempora nisi nemo voluptas debitis consequatur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ex. lorem fa-rotate-27 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque exercitationem eius eveniet quia ex nulla quisquam rem praesentium assumenda!</p>
        </div>
      </section>
    </main>
    )
}
