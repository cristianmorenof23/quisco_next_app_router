"use server"

import { prisma } from "@/src/lib/prisma"
import { OrdenSchema } from "@/src/schema"


export async function crearOrden (data : unknown){
  const resultado = OrdenSchema.safeParse(data)

  if (!resultado.success) {
    return {
      errors: resultado.error.issues
    }
  }

  try {
    await prisma.orden.create({
      data: {
        nombre : resultado.data.nombre,
        total : resultado.data.total,
        ordenProductos : {
          create: resultado.data.orden.map(producto => ({
            productoId: producto.id,
            cantidad: producto.cantidad
          }))
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
  
}