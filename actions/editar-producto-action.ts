"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"
import { revalidatePath } from "next/cache"

export async function actualizarProducto (data: unknown, id : number){
  const resultado = ProductSchema.safeParse(data)
  if (!resultado.success) {
    return {
      errors: resultado.error.issues
    }
  }

  await prisma.producto.update({
    where : {
      id
    },
    data: resultado.data
  })
  revalidatePath('/admin/productos')
  
}