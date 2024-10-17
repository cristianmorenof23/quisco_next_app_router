import { prisma } from "@/src/lib/prisma";
import React from "react";
import CategoriaIconos from "../ui/CategoriaIconos";
import Logo from "../ui/Logo";

async function obtenerCategorias() {
  return await prisma.categorias.findMany();
}

export default async function OrderSideBar() {
  const categorias = await obtenerCategorias();

  return (
    <>
      <aside className="md:w-72 md:h-screen bg-white">
        <Logo/>
        <nav className="mt-10">
          {categorias.map(categoria => (
            <CategoriaIconos key={categoria.id} categoria={categoria} />
          ))}
        </nav>
      </aside>
    </>
  );
}
