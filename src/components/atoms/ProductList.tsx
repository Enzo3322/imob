import { useState } from "react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { BsGrid, BsList } from "react-icons/bs";

export default function ProductList({
  products,
}: Readonly<{
  products: Product[] | [];
}>) {
  const [numColumns, setNumColumns] = useState(3);

  if (!products)
    return (
      <section>
        <h2>Nenhum imóvel encontrado</h2>
      </section>
    );

  return (
    <section className="w-full">
      <div className="justify-end mb-4 hidden md:flex">
        <button
          className={`mr-2 p-1 rounded ${
            numColumns === 1 ? "bg-blue-300" : "bg-blue-100"
          }`}
          onClick={() => setNumColumns(1)}
        >
          <BsList size={24} />
        </button>
        <button
          className={` p-1 rounded ${
            numColumns === 3 ? "bg-blue-300" : "bg-blue-100"
          }`}
          onClick={() => setNumColumns(3)}
        >
          <BsGrid size={24} />
        </button>
      </div>
      <section
        className={`grid w-full ${
          numColumns === 3 ? "lg:grid-cols-3 md:grid-cols-2" : "grid-cols-1"
        } md:gap-4 gap-4`}
      >
        {products.map((product, i) => (
          <ProductCard
            product={product}
            key={i}
            viewType={numColumns === 3 ? "grid" : "list"}
          />
        ))}
      </section>
    </section>
  );
}
