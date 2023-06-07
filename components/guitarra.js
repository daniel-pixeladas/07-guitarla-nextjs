import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'
import { formatearPrecio } from "../utils/helpers"


export default function Guitarra({ guitarra }) {
  const { nombre, descripcion, imagen, precio, url } = guitarra
  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen de la guitarra ${nombre}`} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{formatearPrecio(precio)}</p>
        <Link href={`/guitarras/${url}`}
           className={styles.enlace}
        >Ver producto</Link>
      </div>
    </div>
  )
}
