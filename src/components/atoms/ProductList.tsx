import { Product } from "@/types";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
}: Readonly<{
  products: Product[] | [];
}>) {
  if (!products)
    return (
      <section>
        <h2>Nenhum imóvel encontrado</h2>
      </section>
    );

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 md:gap-4 gap-4">
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </section>
  );
}
