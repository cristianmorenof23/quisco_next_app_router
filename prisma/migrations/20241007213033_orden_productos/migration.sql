-- CreateTable
CREATE TABLE "Orden" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" BOOLEAN NOT NULL DEFAULT false,
    "ordenReadyAt" TIMESTAMP(3),

    CONSTRAINT "Orden_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrdenProductos" (
    "id" SERIAL NOT NULL,
    "ordenId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,

    CONSTRAINT "OrdenProductos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrdenProductos" ADD CONSTRAINT "OrdenProductos_ordenId_fkey" FOREIGN KEY ("ordenId") REFERENCES "Orden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenProductos" ADD CONSTRAINT "OrdenProductos_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
