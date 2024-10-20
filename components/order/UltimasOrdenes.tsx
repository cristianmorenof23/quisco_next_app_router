import { OrdenWithProductos } from '@/src/types'
import React from 'react'

type UltimasOrdenesProps = {
  orden : OrdenWithProductos
}


export default function UltimasOrdenes({orden} : UltimasOrdenesProps) {
  return (
    <div className='bg-white shadow p-5 space-y-5 rounded-lg'>
      <p className='font-mono text-2xl text-slate-600'>
        Cliente: {orden.nombre}
      </p>

      <ul
        role='list'
        className='divide-y divide-gray-200 border-t border-gray-200 text-sm font-mono text-gray-500'
      >

        {orden.ordenProductos.map((producto) => (
          <li key={producto.id} className='flex py-6 text-lg'>
            <p>
              <span>{producto.cantidad} - {''}</span>
              {producto.producto.nombre}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
