"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "@/src/lib/prisma";

export async function completarOrden(formData: FormData) {

  // obtenemos el id del formulario
  const orderId = formData.get('orden_id')!

  try {
    await prisma.orden.update({
      where: {
        id: +orderId
      },
      data: {
        estado: true,
        ordenReadyAt: new Date(Date.now())
      },
    })
;

    revalidatePath('/admin/ordenes')
  } catch (error) {
    console.log(error);
  }

}