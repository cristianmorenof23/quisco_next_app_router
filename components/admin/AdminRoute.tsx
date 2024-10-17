"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

type AdminRoutesTypes = {
  link: {
    url: string;
    text: string;
    blank: boolean;
  };
};

export default function AdminRoute({ link }: AdminRoutesTypes) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(link.url)
  return <Link className={` ${isActive ? 'bg-amber-400' : ''}  font-mono text-lg border-t border-gray-200 p-3 last-of-type:border-b text-center`} target={link.blank ? '_blank' : ''} href={link.url}>{link.text}</Link>;
}
