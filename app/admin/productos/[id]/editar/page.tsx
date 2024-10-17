import EditarProductoForm from "@/components/productos/EditarProductoForm";
import ProductoForm from "@/components/productos/ProductoForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";

async function obtenerProductoById(id: number) {
  const productos = await prisma.producto.findUnique({
    where: {
      id,
    },
  });
  if (!productos) {
    notFound();
  }

  return productos;
}

export default async function page({ params }: { params: { id: string } }) {
  const productos = await obtenerProductoById(+params.id);
  console.log(productos);

  return (
    <>
      <Heading>Editar Productos : {productos.nombre}</Heading>
      <GoBackButton />

      <EditarProductoForm>
        <ProductoForm productos={productos} />
      </EditarProductoForm>
    </>
  );
}
