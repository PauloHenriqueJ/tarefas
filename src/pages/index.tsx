import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import {collection, getDocs} from 'firebase/firestore';
import { db } from '@/services/firebaseConnection'

//import de imagens
import heroImg from '../../public/assets/hero.png'

interface HomeProps{
  posts: number;
  comments: number;
}


const inter = Inter({ subsets: ['latin'] })

export default function Home({posts,comments}:HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Organize suas tarefas</title>
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

      <div className={styles.infoContent}>
        <section className={styles.box}>
          <span>+{posts} posts</span>
        </section>
        <section className={styles.box}>
          <span>+{comments} comentarios</span>
        </section>

      </div>

    </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  

  const commentRef = collection(db, "comments")
  const commentSnapshot = await getDocs(commentRef)

  const postRef = collection(db, "tarefas")
  const postSnapshot = await getDocs(postRef);

  return{
    props:{
      posts:postSnapshot.size || 0,
      comments: commentSnapshot.size,
    },
    revalidate:60, // sera revalidado em 60s
  }
}
