import { prisma } from "@/src/lib/prisma";
import React from "react";
import ImagenesUpload from "./ImagenesUpload";
import { Producto } from "@prisma/client";

async function obtenerCategorias() {
  return await prisma.categorias.findMany();
}

type ProductoFromProps = {
  productos? : Producto
}

export default async function ProductoForm({productos} : ProductoFromProps) {
  const categorias = await obtenerCategorias();

  return (
    <>
      <div className="space-y-2">
        <label className="text-slate-800 font-mono" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          className="block w-full p-3 bg-slate-100 rounded shadow-cyan-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-600"
          placeholder="Nombre Producto"
          defaultValue={productos?.nombre}
        />
      </div>

      <div className="space-y-2">
        <label className="font-mono text-slate-800" htmlFor="precio">
          Precio:
        </label>
        <input
          id="precio"
          name="precio"
          className="block w-full p-3 bg-slate-100 rounded shadow-cyan-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-600"
          placeholder="Precio Producto"
          defaultValue={productos?.categoriaId}
        />
      </div>

      <div className="space-y-2">
        <label className="font-mono text-slate-800" htmlFor="categoriaId">
          Categoría:
        </label>
        <select
          className="block w-full p-3 bg-slate-100 rounded shadow-cyan-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-600 text-center"
          id="categoriaId"
          name="categoriaId"
          defaultValue={productos?.categoriaId}
        >
          <option value="">-- Seleccione --</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>

      <ImagenesUpload 
        image={productos?.image}
      />
    </>
  );
}
