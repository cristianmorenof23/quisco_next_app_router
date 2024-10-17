"use client";
import { crearOrden } from "@/actions/create-orden-action";
import ProductoDetalles from "@/components/order/ProductoDetalles";
import { formatCurrency } from "@/helpers";
import { OrdenSchema } from "@/src/schema";
import { useStore } from "@/src/store";
import { useMemo } from "react";
import { Bounce, toast } from "react-toastify";

export default function ResumenOrder() {
  const { orden, limpiarOrden } = useStore();

  const total = useMemo(
    () => orden.reduce((total, item) => total + item.cantidad * item.precio, 0),
    [orden]
  );

  const handleCreateOrden = async (formData: FormData) => {
    const data = {
      nombre: formData.get("nombre"),
      total,
      orden,
    };

    const result = OrdenSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message, {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
    }
    const response = await crearOrden(data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message, {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
    }

    // se ejecuta si no hay errores
    toast.success("Pedido realizado correctamente!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    limpiarOrden();
  };

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-mono">Mi Pedido</h1>

      {orden.length === 0 ? (
        <p className="text-center my-10 font-mono">El pedido esta vacio</p>
      ) : (
        <div className="mt-5">
          {orden.map((item) => (
            <ProductoDetalles key={item.id} item={item} />
          ))}
          <p className="font-mono text-2xl mt-20 text-center">
            Total a pagar: {""}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>

          <form
            className="w-full shadow mt-10 space-y-5"
            action={handleCreateOrden}
          >
            <input
              type="text"
              placeholder="Tu Nombre"
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent w-full"
              name="nombre"
            />
            <input
              type="submit"
              className="middle text-center none center w-full rounded-lg mt-5 bg-cyan-500 py-4 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              value="Confirmar Pedido"
            />
          </form>
        </div>
      )}
    </aside>
  );
}
