import Link from "next/link";
import React from "react";

type ProductosPaginacionProps = {
  page: number;
  totalPaginas: number;
};

export default function ProductosPaginacion({
  page,
  totalPaginas,
}: ProductosPaginacionProps) {
  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-10">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          {/* Link de Anterior */}
          {page > 1 ? (
            <li className="mx-2">
              <Link
                href={`/admin/productos?page=${page - 1}`}
                className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-cyan-800 hover:text-cyan-800 hover:bg-cyan-200 focus:shadow-none"
              >
                &laquo; Anterior
              </Link>
            </li>
          ) : (
            <li className="mx-2 disabled">
              <span className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-cyan-500 pointer-events-none">
                &laquo; Anterior
              </span>
            </li>
          )}

          {/* Links de las páginas */}
          {paginas.map((numPagina) => (
            <li
              key={numPagina}
              className={`mx-2 ${numPagina === page ? "active" : ""}`}
            >
              <Link
                key={numPagina}
                href={`/admin/productos?page=${numPagina}`}
                className={`page-link relative block py-1.5 px-3 rounded border-0 transition-all duration-300 outline-none ${
                  numPagina === page
                    ? "bg-cyan-600 text-white shadow-md"
                    : "bg-transparent text-cyan-800 hover:text-cyan-800 hover:bg-cyan-200"
                }`}
              >
                {numPagina}
              </Link>
            </li>
          ))}

          {/* Link de Siguiente */}
          {page < totalPaginas ? (
            <li className="mx-2">
              <Link
                href={`/admin/productos?page=${page + 1}`}
                className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-cyan-800 hover:text-cyan-800 hover:bg-cyan-200 focus:shadow-none"
              >
                Siguiente &raquo;
              </Link>
            </li>
          ) : (
            <li className="mx-2 disabled">
              <span className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-cyan-500 pointer-events-none">
                Siguiente &raquo;
              </span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
