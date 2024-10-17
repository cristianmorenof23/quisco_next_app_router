"use client"
import { completarOrden } from "@/actions/completar-orden-action";
import { formatCurrency } from "@/helpers";
import { OrdenWithProductos } from "@/src/types";
import { Bounce, toast } from "react-toastify";

type OrdenCardProps = {
  orden: OrdenWithProductos;
};

export default function OrderCard({ orden }: OrdenCardProps) {
  const handleOrdenCompletada = () => {
    toast("Orden Completada!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4"
    >
      <p className="text-2xl font-mono text-gray-900">
        Cliente: {orden.nombre}
      </p>
      <p className="text-lg font-mono text-gray-900">Productos Ordenados:</p>
      <dl className="mt-6 space-y-4">
        {orden.ordenProductos.map((producto) => (
          <div
            className="flex items-center gap-2 border-t border-gray-200 pt-4 rounded "
            key={producto.id}
          >
            <dt className="flex items-center text-sm text-gray-600">
              <span className="font-black">
                ({producto.cantidad}) : {""}
              </span>
            </dt>
            <dd className="text-sm text-gray-900 font-mono">
              {producto.producto.nombre}
            </dd>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-mono text-gray-900">Total a Pagar:</dt>
          <dd className="text-base font-mono text-gray-900">
            {" "}
            {formatCurrency(orden.total)}
          </dd>
        </div>
      </dl>

      <form action={completarOrden}>
        {/*  Con este input mandamos el id al action        */}
        <input type="hidden" value={orden.id} name="orden_id" />

        <input
          type="submit"
          className="middle text-center none center w-full rounded-lg mt-5 bg-cyan-500 py-4 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          value="Marcar Orden Completada"
          onClick={handleOrdenCompletada}
        />
      </form>
    </section>
  );
}
