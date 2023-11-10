import { Product } from "@/types";

export const getProducts = async (): Promise<Product[] | []> => {
  const res = await fetch("/api/houses");

  if (!res.ok) throw new Error("Query failed");

  return await res.json();
};
