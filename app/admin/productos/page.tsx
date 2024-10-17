import ProductoBusquedaFrom from "@/components/productos/ProductoBusquedaFrom";
import ProductosPaginacion from "@/components/productos/ProductosPaginacion";
import ProductosTable from "@/components/productos/ProductosTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function productosContador() {
  return await prisma.producto.count();
}

// Funcion para traer los productos
async function obtenerProductos(page: number, paginaTamaño: number) {
  const skip = (page - 1) * paginaTamaño;

  const productos = await prisma.producto.findMany({
    take: paginaTamaño,
    skip: skip,
    include: {
      categoria: true,
    },
  });

  return productos;
}

export type ProductosWithCategoria = Awaited<
  ReturnType<typeof obtenerProductos>
>;

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  // obtener pagina actual
  const page = +searchParams.page || 1;
  const paginaTamaño = 10;

  if (page < 0) {
    redirect("/admin/productos");
  }

  const productosData = obtenerProductos(page, paginaTamaño);
  const totalProductosData = productosContador();
  const [productos, totalProductos] = await Promise.all([
    productosData,
    totalProductosData,
  ]);
  const totalPaginas = Math.ceil(totalProductos / paginaTamaño);

  if (page > totalPaginas) {
    redirect("/admin/productos");
  }

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div>
        <Link
          href={"/admin/productos/nuevo"}
          className="middle text-center none center w-full rounded-lg mt-5 bg-amber-500 py-3 px-10 font-sans text-sm font-bold uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
        >
          Crear Producto
        </Link>

        <ProductoBusquedaFrom/>
      </div>

      <ProductosTable productos={productos} />
      <ProductosPaginacion page={page} totalPaginas={totalPaginas} />
    </>
  );
}
