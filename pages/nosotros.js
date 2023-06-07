import React from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            title="Sobre nosotros"
            description="Te explicamos quiénes somos nosotros. "
        >
            <main className='contenedor'>
                <h1 className='heading'>Nosotros</h1>
                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={500} height={200} alt="Imagen sobre nosotros"></Image>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget augue vel velit molestie tempus at sed nibh. Aliquam erat volutpat. Nullam sodales convallis quam. Morbi gravida fermentum lectus eu dictum. Vivamus viverra lacinia lectus, a porta justo. Maecenas dictum lectus at odio ullamcorper, nec tristique ipsum congue. Integer nec semper neque. Proin blandit mauris at semper eleifend. </p>
                        <p>Morbi a blandit ex. Nunc a finibus augue, quis euismod augue. Aenean nec malesuada nulla, eu dignissim erat. Integer sodales sapien sit amet turpis hendrerit sagittis. Aliquam dignissim ullamcorper gravida. Nunc augue est, aliquet sed lacus quis, vehicula feugiat augue. Suspendisse potenti. Fusce auctor vestibulum mollis. Morbi quis pulvinar lectus.</p>
                    </div>
                </div>
            </main>

        </Layout>
    )
}
