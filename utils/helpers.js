export function formatearPrecio(precio){
    return precio?.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}