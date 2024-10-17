import { formatCurrency, obtenerImagenPath } from "@/helpers";
import { Producto } from "@prisma/client";
import Image from "next/image";
import React from "react";
import AgregarProductos from "./AgregarProductos";

type ProductoCardProps = {
  producto: Producto;
};

export default function ProductoCard({ producto }: ProductoCardProps) {
  const imagenPath = obtenerImagenPath(producto.image);
  return (
    <div className="border bg-white shadow rounded-lg w-[260px] h-[570px] flex flex-col justify-between">
      <Image
        src={imagenPath}
        alt={`Imagen platillo ${producto.nombre}`}
        height={500}
        width={400}
        className="rounded transition-transform hover:scale-105"
        priority={true}
      />
      <div className="p-5 flex flex-col flex-1">
      <h3 className="font-mono text-2xl">{producto.nombre}</h3>
        <p className="mt-5 font-mono text-4xl text-amber-500">
          {formatCurrency(producto.precio)}
        </p>
        <div className="mt-auto">
          <AgregarProductos producto={producto} />
        </div>
      </div>
    </div>
  );
}
