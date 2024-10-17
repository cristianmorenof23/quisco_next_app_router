import { ProductosWithCategoria } from "@/app/admin/productos/page";
import { formatCurrency } from "@/helpers";
import Link from "next/link";
import React from "react";

type ProductosTableProps = {
  productos: ProductosWithCategoria
};

export default function ProductosTable({ productos }: ProductosTableProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-20 rounded border-0 shadow">
      <div className="mt-8 flow-root ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-md font-mono text-gray-900 md:pl-0"
                  >
                    Producto
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-md font-mono text-gray-900"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-md font-mono text-gray-900"
                  >
                    Categoría
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 md:pr-0">
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {productos.map((producto) => (
                  <tr key={producto.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-mono text-gray-900 sm:pl-0">
                      {producto.nombre}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {formatCurrency(producto.precio)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {producto.categoria.nombre}
                    </td>
                    <td className="relative whitespace-nowrap py-3 pl-3 pr-4 text-center text-sm font-mono sm:pr-0">
                      <Link
                        href={`/admin/productos/${producto.id}/editar`}
                        className="middle text-center none center w-full rounded-lg mt-5 bg-cyan-500 py-2 px-6 font-mono text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      >
                        Editar{" "}
                        <span className="sr-only">, {producto.nombre}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
