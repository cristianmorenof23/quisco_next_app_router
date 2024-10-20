import { prisma } from "@/src/lib/prisma";

export const dynamic = 'force-dynamic'

export async function GET() {


  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
    include: {
      ordenProductos: {
        include: {
          producto: true,
        },
      },
    },
  });

  return Response.json(ordenes)
}