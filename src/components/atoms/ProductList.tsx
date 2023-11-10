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
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm: grid-cols-2 gap-8">
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </section>
  );
}
