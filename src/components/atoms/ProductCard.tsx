import { Product } from "@/types";
import ProductCardCarousel from "./ProductCardCarousel";
import Flag from "./Flag";
import Specification from "./Specification";

function FlagList({ flags }: { flags?: string[] }) {
  if (!flags) {
    return null;
  }
  return (
    <div>
      {flags.map((flag) => (
        <Flag key={flag} flag={flag} />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const address = `${product.address.street}, ${product.address.neighboorhood}, ${product.address.long_uf}`;

  return (
    <a href="">
      <ProductCardCarousel />
      <span>{product.type}</span>
      <p>{address}</p>
      <FlagList flags={product.flags} />
      <Specification />
    </a>
  );
}
