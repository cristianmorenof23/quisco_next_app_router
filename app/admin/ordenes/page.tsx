"use client";
import OrderCard from "@/components/order/OrderCard";
import SpinnerLoading from "@/components/order/SpinnerLoading";
import Heading from "@/components/ui/Heading";
import { OrdenWithProductos } from "@/src/types";
import React from "react";
import useSWR from "swr";

export default function OrdenesPage() {
  const url = "/admin/ordenes/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, isLoading } = useSWR<OrdenWithProductos[]>(
    url,
    fetcher,
    {
      refreshInterval: 60000,
      revalidateOnFocus: false
    }
  );

  if (isLoading) return <SpinnerLoading />;

  if (data)
    return (
      <>
        <Heading>Administrar Ordenes</Heading>

        {data.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
            {data.map((orden) => (
              <OrderCard key={orden.id} orden={orden} />
            ))}
          </div>
        ) : (
          <p className="text-center">No hay ordenes pendientes</p>
        )}
      </>
    );
}
