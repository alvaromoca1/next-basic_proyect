import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
export default function Home() {
  return (
    <Menu home>
      <Head>
        <title>New proyect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container}>
        <p className={styles.article}>En este pequeño proyecto podremos ver como cambiar de componentes y podremos ver  como contruir un menu , tambien podremos
          cambiar el menu conforme a cual de los componentes nos adentremos  es algo simpe y bueno,
          dale al boton "OTRO COMPONENTE" y veras que se cmabiara de componentes y a su ves de clase de menu
        </p>
      </section>
      
    </Menu>
  )
}
