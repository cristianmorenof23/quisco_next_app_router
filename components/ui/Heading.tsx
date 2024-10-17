import React, { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl font-mono my-10 text-center">{children} </h1>;
}
