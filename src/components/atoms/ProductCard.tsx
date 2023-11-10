/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types";
import { formatCurrencyBRL } from "@/utils/formatCurrency";
import Link from "next/link";

export default function ProductCard({
  product,
}: Readonly<{ product: Product }>) {
  return (
    <Link href={`/${product.id}`}>
      <div className="flex flex-col gap-4 border p-4 rounded-md">
        <img src={product.images[0]} alt={product.name} className="rounded" />

        <h2>
          {formatCurrencyBRL(product.price)}{" "}
          {product.type === "aluguel" && "p/mês"}
        </h2>
        <div className="flex flex-col items-start justify-between">
          {product.amenities.map((amenitie, i) => (
            <p key={i} className="flex gap-2 text-left">
              {amenitie.name}:<b>{amenitie.value}</b>
            </p>
          ))}
        </div>
        <p>{product.description.split(" ").slice(0, 8).join(" ")}...</p>
        <span>
          {product.address.neighboorhood}, {product.address.city},
          {product.address.state},
        </span>
      </div>
    </Link>
  );
}
