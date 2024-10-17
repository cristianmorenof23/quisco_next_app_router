import ProductoBusquedaFrom from "@/components/productos/ProductoBusquedaFrom";
import ProductosTable from "@/components/productos/ProductosTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function busquedaProductos(busquedaTermino: string) {
  const productos = await prisma.producto.findMany({
    where: {
      nombre: {
        contains: busquedaTermino,
        mode: "insensitive",
      },
    },
    include: {
      categoria: true,
    },
  });
  return productos;
}

export default async function BusquedaPagina({
  searchParams,
}: {
  searchParams: { busqueda: string };
}) {
  const productos = await busquedaProductos(searchParams.busqueda);
  return (
    <>
      <Heading>Resultados de Busqueda : {searchParams.busqueda}</Heading>
      <div>
        <ProductoBusquedaFrom />
      </div>

      {productos.length ? (
        <ProductosTable productos={productos} />
      ) : (
        <div>
          <p className="text-center text-lg font-mono mt-10">
            Producto no encontrado, intenta con otro
          </p>
          <p className="text-center text-lg font-mono mt-10">
            Si es cafe, debes escribirlo con acento <span className="font-semibold text-xl">café</span>{" "}
          </p>
        </div>
      )}
    </>
  );
}
