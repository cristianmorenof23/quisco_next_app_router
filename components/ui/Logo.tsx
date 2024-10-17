import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex justify-center mt-5">
      <div className="relative w-40 h-40">
        <Link href="/">
          <Image
            fill
            alt="Logo tipo fresh coffe"
            style={{ objectFit: "contain" }}
            src="/logo.svg"
            className="hover:cursor-pointer hover:scale-110 transition-transform transform"
          />
        </Link>
      </div>
    </div>
  );
}
