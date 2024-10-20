import { prisma } from "@/src/lib/prisma";

export const dynamic = 'force-dynamic'


export async function GET() {
  const ordenes = await prisma.orden.findMany({
    take: 5,
    where: {
      ordenReadyAt: {
        not: null
      }
    },
    orderBy: {
      ordenReadyAt: 'desc'
    },
    include: {
      ordenProductos: {
        include: {
          producto: true
        }
      }
    }
  });
  return Response.json(ordenes)
}
