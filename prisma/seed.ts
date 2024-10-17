import { categoria } from "./data/categorias";
import { productos } from "./data/productos";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.categorias.createMany({
      data: categoria
    })
    await prisma.producto.createMany({
      data: productos
    })
  } catch (error) {
    console.log(error);

  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })