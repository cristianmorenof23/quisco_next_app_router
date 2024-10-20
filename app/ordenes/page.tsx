"use client";
import SpinnerLoading from "@/components/order/SpinnerLoading";
import UltimasOrdenes from "@/components/order/UltimasOrdenes";
import Logo from "@/components/ui/Logo";
import { OrdenWithProductos } from "@/src/types";
import React from "react";
import useSWR from "swr";

export default function OrdenesPagina() {
  const url = "/ordenes/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, isLoading } = useSWR<OrdenWithProductos[]>(url, fetcher, {
    refreshInterval: 10000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <SpinnerLoading />;

  if (data)
    return (
      <>
        <h1 className="mt-20 text-6xl font-mono text-center">Ordenes Listas</h1>
        <Logo />

        {data.length ? (
          <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
            {data.map((orden) => (
              <UltimasOrdenes key={orden.id} orden={orden} />
            ))}
          </div>
        ) : (
          <p className="text-center m-10 font-mono">No hay ordenes listas</p>
        )}
      </>
    );
}
