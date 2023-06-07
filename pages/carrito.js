import { useEffect, useState } from 'react'
import Image from "next/image";
import Layout from "../components/layout";
import styles from '../styles/carrito.module.css'
import { formatearPrecio } from "../utils/helpers";

export default function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])

    return (
        <Layout title="Carrito de compras">
            <main className="contenedor">
                <h1 className="heading">Carrito</h1>
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Artículos</h2>
                        {carrito.length === 0 ? 'Carrito vacío' : (
                            carrito.map(producto => (
                                <div
                                    key={producto.id}
                                    className={styles.producto}>
                                    <div>
                                        <Image
                                            width={250} height={250}
                                            src={producto.imagen} 
                                            alt={'test'} 
                                            className={styles.imagen}/>
                                    </div>
                                    <div>
                                        <p className={styles.nombre}>{producto.nombre}</p>

                                        <div className={styles.cantidad}>
                                            <p>Cantidad:</p>
                                            <input type="number"
                                                value={producto.cantidad}
                                                defaultValue={1}
                                                min={1}
                                                onChange={e => actualizarCantidad({
                                                    id: producto.id,
                                                    cantidad: e.target.value
                                                })}>

                                            </input>
                                        </div>

                                        <p className={styles.precio}><span>{formatearPrecio(producto.precio)}</span></p>
                                        <p className={styles.subtotal}>Subtotal: <span>{formatearPrecio(producto.cantidad * producto.precio)}</span></p>

                                        <button
                                            className={styles.eliminar}
                                            type="button"
                                            onClick={() => eliminarProducto(producto.id)}>
                                            X
                                        </button>
                                    </div>

                                </div>
                            ))
                        )}

                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: {formatearPrecio(total)}</p>
                    </aside>
                </div>
            </main>

        </Layout>

    )
}
