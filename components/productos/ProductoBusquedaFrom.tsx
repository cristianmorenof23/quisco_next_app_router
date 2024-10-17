"use client";
import { BusquedaSchema } from "@/src/schema";
import React from "react";
import { toast } from "react-toastify";
import {  useRouter } from "next/navigation";


export default function ProductoBusquedaFrom() {
  const router = useRouter()
  const handleBusqedaAction = (formData: FormData) => {
    const data = {
      busqueda: formData.get("busqueda"),
    };
    const resultado = BusquedaSchema.safeParse(data);
    if (!resultado.success) {
      resultado.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return
    }
    router.push(`/admin/productos/busqueda?busqueda=${resultado.data.busqueda}`)
  };

  return (
    <form
      className="flex items-center justify-center mt-10 gap-2"
      action={handleBusqedaAction}
    >
      <input
        placeholder="Buscar Producto"
        type="text"
        className="p-2 text-center placeholder-gray-400 w-60 rounded  shadow-cyan-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-600"
        name="busqueda"
      />

      <input
        type="submit"
        className="p-2 px-11 rounded border bg-cyan-600 text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
        value={"Buscar"}
      />
    </form>
  );
}
