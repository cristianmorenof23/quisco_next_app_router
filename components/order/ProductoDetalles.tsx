import { formatCurrency } from "@/helpers";
import { useStore } from "@/src/store";
import { OrdenItem } from "@/src/types";
import { XCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import React, { useMemo } from "react";

type ProductoDetallesProps = {
  item: OrdenItem;
};

const MAX_ITEM = 7

export default function ProductoDetalles({ item }: ProductoDetallesProps) {
  const { incrementarCantidad, decrementarCantidad, eliminarOrden } = useStore();
  const disableDecrementarButton = useMemo(() => item.cantidad === 1, [item]);
  const disableIncrementarButton = useMemo(() => item.cantidad === MAX_ITEM, [item]);

  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-mono">{item.nombre} </p>

          <button type="button" onClick={() => eliminarOrden(item.id)}>
            <XCircleIcon className="text-red-400 h-8 w-8 hover:text-red-600 transition-transform hover:scale-125" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-mono">
          {formatCurrency(item.precio)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button
            type="button"
            onClick={() => decrementarCantidad(item.id)}
            disabled={disableDecrementarButton}
            className="disabled:opacity-10"
          >
            <MinusIcon className="h-6 w-6" />
          </button>

          <p className="text-lg font-mono">{item.cantidad}</p>

          <button 
          type="button" 
          onClick={() => incrementarCantidad(item.id)}
          disabled={disableIncrementarButton}
          className="disabled:opacity-10"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-xl font-mono text-gray-700">
          Subtotal: {""}
          <span className="font-mono">${item.subtotal}</span>
        </p>
      </div>
    </div>
  );
}
