import ProductList from "@/components/atoms/ProductList";
import ProductListFilter from "@/components/atoms/ProductListFilter";
import { mockhouses } from "@/mock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const products = mockhouses;

export default function Home() {
  return (
    <main
      className={`flex min-h-screen max-w-screen-xl m-auto flex-col items-center justify-center md:pt-20 pt-8 ${inter.className}`}
    >
      <ProductListFilter />
      <ProductList products={products} />
    </main>
  );
}
