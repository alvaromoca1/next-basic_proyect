import Head from 'next/head'
import styles from './menu.module.css'
import Link from 'next/link'

export default function Menu({ children, home}){
    return (
        <div>
            <header className={styles.header}>
                {home ?(
                    <>
                        <h4>Alvaro Morales</h4>
                        <Link href='/segundo'>Otro componente</Link>
                    </>
                ):(
                    <>
                        <h4>Alvaro Morales</h4>
                        <Link href='/'>Ir al inicio</Link>
                    </>
                )}
            </header>

            <main>{children}</main>
        </div>
    )

}