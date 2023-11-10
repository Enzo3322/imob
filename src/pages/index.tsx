import ProductList from "@/components/atoms/ProductList";
import ProductListFilter from "@/components/atoms/ProductListFilter";
import { mockhouses } from "@/mock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const products = mockhouses;

export default function Home() {
  return (
    <main
      className={`flex md:flex-row flex-col min-h-screen max-w-screen-xl m-auto gap-8 items-start justify-center md:pt-12 md:p-8 p-3 ${inter.className}`}
    >
      <ProductListFilter />
      <ProductList products={products} />
    </main>
  );
}
