import { z } from 'zod'


export const OrdenSchema = z.object({
  nombre: z.string().min(1, 'Tu nombre es obligatorio'),
  total: z.number().min(1, 'Hay errores en la orden'),
  orden: z.array(z.object({
    id: z.number(),
    nombre: z.string(),
    precio: z.number(),
    cantidad: z.number(),
    subtotal: z.number()
  }))
})


export const BusquedaSchema = z.object({
  busqueda: z.string().trim().min(1, { message: 'La busqueda no puede ir vacia' })
})

// validar nuevos productos
export const ProductSchema = z.object({
  nombre: z.string()
    .trim()
    .min(1, { message: 'El Nombre del Producto no puede ir vacio' }),
  precio: z.string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: 'Precio no válido' })
    .or(z.number().min(1, { message: 'La Categoría es Obligatoria' })),
  categoriaId: z.string()
    .trim()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: 'La Categoría es Obligatoria' })
    .or(z.number().min(1, { message: 'La Categoría es Obligatoria' })),
  image: z.string().min(1, { message: 'La imagen es obligatoria' })
})