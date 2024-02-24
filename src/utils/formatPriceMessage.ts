import { Product } from "@/types";
import { formatCurrencyBRL } from "./formatCurrency";

export const formatPriceMessage = (product: Product) => {
  const price = formatCurrencyBRL(product.price);

  switch (product.type) {
    case "aluguel":
      return `${price} p/mês`;
    case "temporada":
      return `${price} p/dia`;
    default:
      return price;
  }
};
