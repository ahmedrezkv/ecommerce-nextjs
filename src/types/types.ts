import { products } from "@/data/products";

export type Product = (typeof products.mattresses)[0];

export type ProductsSwiperList = {
  id: string;
  label: string;
  products: Product[];
}[];
