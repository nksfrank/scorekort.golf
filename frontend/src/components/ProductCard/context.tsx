"use client";
import type { Product } from "./types";
import { createContext, useMemo, useContext } from "react";

const productCtx = createContext<Product | null>(null);
export function ProductProvider({
  product,
  children,
}: {
  product: Product;
  children: JSX.Element;
}) {
  const productAtom = useMemo(() => product, [product]);
  return (
    <productCtx.Provider value={productAtom}>{children}</productCtx.Provider>
  );
}

export const useProduct = () => {
  const productAtom = useContext(productCtx);
  if (productAtom === null) {
    throw new Error("Using Product sub component outside of root <Card>");
  }
  return productAtom;
};
