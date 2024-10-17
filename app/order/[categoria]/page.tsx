import ProductoCard from "@/components/productos/ProductoCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import React from "react";

async function obtenerProductos(categoria: string) {
  const productos = await prisma.producto.findMany({
    where: {
      categoria: {
        slug: categoria,
      },
    },
  });
  return productos;
}

export default async function OrderPage({
  params,
}: {
  params: { categoria: string };
}) {
  const productos = await obtenerProductos(params.categoria);

  return (
    <>
      <Heading>Elige y personaliza tu pedido a continuación</Heading>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  gap-4 items-start">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
}
