/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types";
import { formatCurrencyBRL } from "@/utils/formatCurrency";

export default function ProductCard({
  product,
}: Readonly<{ product: Product }>) {
  return (
    <a
      className="flex flex-col gap-4 border p-4 rounded-md"
      href={`/${product.id}`}
    >
      <img src={product.images[0]} alt={product.name} />

      <h2>
        {formatCurrencyBRL(product.price)}{" "}
        {product.type === "aluguel" && "p/mês"}
      </h2>
      <div className="flex items-center justify-between">
        {product.amenities.map((amenitie, i) => (
          <p key={i} className="flex flex-col text-center">
            <b>{amenitie.value}</b>
            {amenitie.name}
          </p>
        ))}
      </div>
      <p>{product.description}</p>
      <span>
        {product.address.neighboorhood}, {product.address.city},
        {product.address.state},
      </span>
    </a>
  );
}
