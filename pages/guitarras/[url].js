import styles from '../../styles/guitarras.module.css'
import { formatearPrecio } from '../../utils/helpers'
import Image from 'next/image'
import Layout from '../../components/layout'
import { useState } from 'react'

export default function Guitarra({ guitarra, agregarCarrito }) {
    const [cantidad, setCantidad ] = useState(0);
    const { nombre, descripcion, imagen, precio, url } = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()
        if (cantidad < 1) {
            alert("Cantidad no válida")
            return
        }
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)
    }
    return (
        <Layout title={`Guitarra ${nombre}`} description={`En Guitar LA vendemos guitarras como la ${nombre}. Consigue guitarras al mejor precio`} >
            <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen de la guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{formatearPrecio(precio)}</p>
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <label htmlFor='cantidad'>Cantidad:</label>
                    <select id="cantidad" 
                        onChange={e => setCantidad(Number(e.target.value))}>
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Agregar al carrito" />
                </form>
            </div>
        </div>
        </Layout>
        
    )
}

export async function getStaticProps(datos) {
    const { params: { url } } = datos
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()
    return {
        props: {
            guitarra
        },
        revalidate: 300
    }
}

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))
    return {
        paths,
        fallback: false
    }
}

// export async function getServerSideProps(datos) {
//     const {query: {url}} = datos
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = await respuesta.json()
//     return {
//         props: {
//             guitarra
//         }
//     }
// }