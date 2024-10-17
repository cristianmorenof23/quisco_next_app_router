"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";
import { obtenerImagenPath } from "@/helpers";

export default function ImagenesUpload({image} : {image: string | undefined}) {
  const uploadPreset = "ml_default"; // Reemplaza con tu upload preset

  const [imagenUrl, setImagenUrl] = useState("");

  return (
    <CldUploadWidget
      onSuccess={(resultado, { widget }) => {
        if (resultado.event === "success") {
          // Aquí está el cambio
          widget.close();
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          setImagenUrl(resultado.info?.secure_url);
        }
      }}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <>
          <div
            className="space-y-2"
            onClick={() => open()}
            style={{ cursor: "pointer" }}
          >
            <label className="text-slate-800 font-mono">Imagen Producto</label>
            <div
              onClick={() => open()}
              className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100 border shadow"
            >
              <TbPhotoPlus size={50} />
              <p className="text-lg font-semibold">Agregar Imagen</p>

              {imagenUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    src={imagenUrl}
                    alt="imagen de producto"
                  />
                </div>
              )}
            </div>
          </div>

          {image && !imagenUrl &&(
            <div className="space-y-2">
              <label className="font-mono text-slate-800">Imagen Actual :</label>
              <div className="relative w-64 h-64 border shadow rounded">
                <Image
                fill
                src={obtenerImagenPath(image)}
                alt="imagen producto"
                />
              </div>
            </div>
          )}

          <input
            type="hidden"
            name="imagen"
            defaultValue={imagenUrl ? imagenUrl : image}
          />
        </>
      )}
    </CldUploadWidget>
  );
}
