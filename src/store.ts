import { create } from 'zustand'
import { OrdenItem } from './types'
import { Producto } from '@prisma/client'
import { Bounce, toast } from 'react-toastify'


interface Store {
  orden: OrdenItem[]
  agregarCarrito: (producto: Producto) => void
  incrementarCantidad: (id: Producto['id']) => void
  decrementarCantidad: (id: Producto['id']) => void
  eliminarOrden: (id: Producto['id']) => void
  limpiarOrden: () => void
}


export const useStore = create<Store>((set, get) => ({
  orden: [],
  agregarCarrito: (producto) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { categoriaId, image, ...data } = producto
    let item: OrdenItem[] = []

    if (get().orden.find(item => item.id === producto.id)) {
      item = get().orden.map(item => item.id === producto.id ? {
        ...item,
        cantidad: item.cantidad + 1,
        subtotal: item.precio * (item.cantidad + 1)
      } : item)
    } else {
      item = [...get().orden, {
        ...data,
        cantidad: 1,
        subtotal: 1 * producto.precio
      }]
      toast('Agregado correctamente!!', {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    set(() => ({
      orden: item
    }))
  },
  incrementarCantidad: (id) => {
    set((state) => ({
      orden: state.orden.map(item => item.id === id ? {
        ...item,
        cantidad: item.cantidad + 1,
        subtotal: item.precio * (item.cantidad + 1)
      } : item)
    }))
  },
  decrementarCantidad: (id) => {

    //controlar que la cantidad no sea -1
    const orden = get().orden.map(item => item.id === id ? {
      ...item,
      cantidad: item.cantidad - 1,
      subtotal: item.precio * (item.cantidad - 1)
    } : item)

    set(() => ({
      orden
    }))

  },
  eliminarOrden: (id) => {

    set((state) => ({
      orden: state.orden.filter(item => item.id !== id)
    }))
    toast.error('Eliminado Correctamente', {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  },
  limpiarOrden: () => {
    set(() => ({
      orden: []
    }))
  }
}))