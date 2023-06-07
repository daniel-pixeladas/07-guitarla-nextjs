import Link from "next/link";
import Layout from "../components/layout";
import styles from '../styles/grid.module.css'
import Guitarra from "../components/guitarra";
import Post from "../components/post";
import Curso from "../components/curso";

export default function Home({guitarras, posts, curso }) {
  console.log(curso)
  return (
    <Layout
      title="Inicio"
      description="Venta de guitarras, blog de música y mucho más."
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra 
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>

      <Curso curso={curso.attributes} />
      <section>
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map(post => (
            <Post 
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </section>
      
    </Layout>
  )
}

export async function getStaticProps(ctx) {

  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`


  const [resGuitarras, resPosts, resCurso ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),
  ])

  const [{data: guitarras}, {data: posts}, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json(),
  ])

  return {
    props:{
      guitarras,
      posts,
      curso,
    }
  }
}
