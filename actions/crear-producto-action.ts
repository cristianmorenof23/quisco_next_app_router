"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"

export async function crearProducto(data: unknown) {
  const resultado = ProductSchema.safeParse(data)
  if (!resultado.success) {
    return {
      errors: resultado.error.issues
    }
  }

  await prisma.producto.create({
    data: resultado.data
  })
}