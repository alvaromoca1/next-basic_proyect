import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Menu from '../../components/menu'
export default function Index(){
    return(
        <Menu>
            <Head>
                <title>Segundo Componente</title>
            </Head>
            <section className={styles.container}>
                <p className={styles.article}>Ahora estas dentro del Segundo Compoenente Si quieres regresar solo ve al inicio
                </p>
            </section>
        </Menu>
    )
}