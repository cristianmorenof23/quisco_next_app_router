import AgregarProductoForm from "@/components/productos/AgregarProductoForm";
import ProductoForm from "@/components/productos/ProductoForm";
import Heading from "@/components/ui/Heading";

export default function CrearProductoPage() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>

      <AgregarProductoForm>
        <ProductoForm />
      </AgregarProductoForm>
    </>
  );
}
