export type Product = {
  id: string;
  title?: string;
  description?: string;
  images?: { src: string; alt: string; width: number; height: number }[];
  price?: {
    discount?: string;
    original?: number;
    final: number;
  };
  rating?: number;
  reviews?: number;
};
export type ProductId = Product["id"];
