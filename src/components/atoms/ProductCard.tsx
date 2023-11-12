/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types";
import { formatCurrencyBRL } from "@/utils/formatCurrency";
import Link from "next/link";

export default function ProductCard({
  product,
  viewType,
}: Readonly<{ product: Product; viewType: "list" | "grid" }>) {
  return (
    <Link href={`/${product.id}`} className="w-full">
      <div
        className={`flex w-full ${
          viewType === "grid" ? "flex-col" : "flex-row"
        } gap-2 border  rounded-md h-full overflow-hidden`}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="md:max-w-[300px]"
        />
        <div className="px-4 py-2">
          <h2 className="text-lg font-semibold ">
            {formatCurrencyBRL(product.price)}{" "}
            {product.type === "aluguel" && "p/mês"}
          </h2>
          <div className="flex flex-col items-start justify-between"></div>
          <p className="text-gray-500 text-xs">
            {product.address.neighboorhood}, {product.address.city} -{" "}
            {product.address.state}
          </p>
        </div>
      </div>
    </Link>
  );
}
