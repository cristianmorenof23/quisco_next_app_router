"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="middle text-center none center w-full lg:w-auto rounded-lg mt-5 bg-amber-500 py-3 px-10 font-sans text-sm font-bold uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
    >
      Volver
    </button>
  );
}
