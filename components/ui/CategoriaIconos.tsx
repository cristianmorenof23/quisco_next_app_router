"use client"
import { Categorias } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type CategoriaIconsProps = {
  categoria: Categorias;
};

export default function CategoriaIconos({ categoria }: CategoriaIconsProps) {
  const params = useParams()

  return (
    <div
      className={`${categoria.slug === params.categoria ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border-t border-gray-400 last-of-type:border-b p-3`}
    >
      <div className="w-16 h-16 relative cursor-pointer transition-transform hover:scale-125">
        <Image fill src={`/icon_${categoria.slug}.svg`} alt="imagen de logo" />
      </div>
      <Link className="text-xl font-mono text-amber-600 cursor-pointer" href={`/order/${categoria.slug}`}>
        {categoria.nombre}
      </Link>
    </div>
  );
}
