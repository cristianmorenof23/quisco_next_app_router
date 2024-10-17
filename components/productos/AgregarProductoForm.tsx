"use client";

import { crearProducto } from "@/actions/crear-producto-action";
import { ProductSchema } from "@/src/schema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AgregarProductoForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const data = {
      nombre: formData.get("nombre"),
      precio: formData.get("precio"),
      categoriaId: formData.get("categoriaId"),
      image: formData.get("imagen"),
    };
    const resultado = ProductSchema.safeParse(data);
    if (!resultado.success) {
      resultado.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    const response = await crearProducto(resultado.data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    toast.success("Producto Creado Correctamente");
    router.push("/admin/productos");
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto ">
      <form action={handleSubmit} className="space-y-5">
        {children}

        <input
          type="submit"
          className="middle text-center none center w-full rounded-lg mt-5 bg-cyan-500 py-4 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          value="Registrar Producto"
        />
      </form>
    </div>
  );
}
