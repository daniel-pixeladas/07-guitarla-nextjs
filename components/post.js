import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from "../utils/helpers"


export default function Post({ post }) {
    const { titulo, imagen, contenido, publishedAt, url } = post
    return (
        <article>
            <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen Blog ${titulo}`} width={600} height={400} ></Image>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`}
                    className={styles.enlace}
                >Leer post</Link>
            </div>
        </article>
    )
}
