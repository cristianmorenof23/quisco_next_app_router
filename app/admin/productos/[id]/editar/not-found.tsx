import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-center">
      <Heading>Producto no Encontrado</Heading>
      <Link
        href="/admin/productos"
        className="middle text-center none center w-full rounded-lg mt-5 bg-cyan-500 py-4 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
      >
        Ir a Productos
      </Link>
    </div>
  );
}
