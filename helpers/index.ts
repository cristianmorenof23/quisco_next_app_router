export function formatCurrency (cantidad : number){
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(cantidad)
}


export function obtenerImagenPath (imagenPath : string){
  const cloudinaryBaseUrl = 'https://res.cloudinary.com'

  if (imagenPath.startsWith(cloudinaryBaseUrl)) {
    return imagenPath
  } else {
    return `/productos/${imagenPath}.jpg`
  }
}