/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types";
import { formatCurrencyBRL } from "@/utils/formatCurrency";
import Link from "next/link";

export default function ProductCard({
  product,
}: Readonly<{ product: Product }>) {
  return (
    <Link href={`/${product.id}`}>
      <div className="flex flex-col gap-2 border p-4 rounded-md h-full">
        <img
          src={product.images[0]}
          alt={product.name}
          className="rounded w-full"
        />
        <h2 className="text-lg font-semibold">
          {formatCurrencyBRL(product.price)}{" "}
          {product.type === "aluguel" && "p/mês"}
        </h2>
        <div className="flex flex-col items-start justify-between"></div>
        <p className="text-gray-500 text-xs">
          {product.address.neighboorhood}, {product.address.city} -{" "}
          {product.address.state}
        </p>
      </div>
    </Link>
  );
}
