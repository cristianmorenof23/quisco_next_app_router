import OrderSideBar from "@/components/order/OrderSideBar";
import React from "react";
import ResumenOrder from "./ResumenOrder";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function RootLayout({children} : Readonly<{children : React.ReactNode}>){
  return (
    <>
      <div className="md:flex">
        <OrderSideBar/>

        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
          {children}
        </main>
        <ResumenOrder/>
      </div>
    </>
  )
}