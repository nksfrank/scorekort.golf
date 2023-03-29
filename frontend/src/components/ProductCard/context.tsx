"use client";
import type { Product } from "./types";
import { atom, useAtomValue } from "jotai";

export const productAtom = atom<Product | null>(null);

export const useProduct = () => {
  const p = useAtomValue(productAtom);
  if (p === null) {
    throw new Error("Using productAtom outside of root <Card>");
  }
  return p;
};
