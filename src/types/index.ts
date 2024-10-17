import { Orden, OrdenProductos, Producto } from "@prisma/client";

export type OrdenItem = Pick<Producto, 'id' | 'nombre' | 'precio'> & {
  cantidad : number
  subtotal : number
}


export type OrdenWithProductos = Orden & {
  ordenProductos : (OrdenProductos & {
    producto : Producto
  }) []
}