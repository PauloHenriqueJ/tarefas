import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

//import de imagens
import heroImg from '../../public/assets/hero.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Organize suas tarefas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>
      <div className={styles.logoContent}>
        <Image className={styles.heto}
        alt='Logo tarefa'
        src={heroImg}
        priority
        />
      </div>
      <h1 className={styles.title}> Sistema feito para voce organizar <br/> 
      seus estudos e tarefas</h1>

    </main>
    </div>
  )
}
