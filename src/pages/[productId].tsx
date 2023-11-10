/* eslint-disable @next/next/no-img-element */
import { ContactButton } from "@/components/atoms/ContactButton";
import DescriptionAccordion from "@/components/atoms/DescriptionAccordion";
import ProductImages from "@/components/atoms/ProductImages";
import ProductPageSkeleton from "@/components/skeleton/ProductPageSkeleton";
import { mockhouses } from "@/mock";

import { MdContentCopy } from "react-icons/md";
import { BiBed, BiBath } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { formatCurrencyBRL } from "@/utils/formatCurrency";
import { useRouter } from "next/router";

export default function House() {
  const router = useRouter();
  const { productId } = router.query;

  const product = mockhouses.find((house) => house.id === productId);

  if (!product) {
    return <ProductPageSkeleton />;
  }
  const { street, city, neighboorhood, number, state } = product.address;

  return (
    <main className="flex flex-col items-center justify-start min-h-screen max-w-screen-xl m-auto md:pt-20 pt-8 p-4">
      <div className="flex md:flex-row flex-col gap-20 w-full items-center justify-center mb-8">
        <ProductImages product={product} />
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <h1 className="text-2xl  mb-4">
            <span className="font-bold text-4xl">
              {formatCurrencyBRL(product.price)}{" "}
            </span>
            {product.type === "aluguel" && "p/mês"}
          </h1>
          <p className="mb-8">
            {street}, {number} - {neighboorhood}, {city} - {state}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex gap-2">
              <MdContentCopy size="23" />
              {product.specifications.meters}m²
            </div>
            <div className="flex gap-2">
              <BiBed size="22" />
              {product.specifications.rooms} quartos
            </div>
            <div className="flex gap-2">
              <BiBath size="22" />
              {product.specifications.bathroom} banheiros
            </div>
            <div className="flex gap-2">
              <AiOutlineCar size="22" />
              {product.specifications.bathroom} vagas
            </div>
          </div>
          <ContactButton />
        </div>
      </div>
      <DescriptionAccordion text={product.description} />
    </main>
  );
}
