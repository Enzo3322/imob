/* eslint-disable @next/next/no-img-element */
import { ContactButton } from "@/components/atoms/ContactButton";
import DescriptionAccordion from "@/components/atoms/DescriptionAccordion";
import ProductImages from "@/components/atoms/ProductImages";
import { mockhouses } from "@/mock";
import { formatCurrencyBRL } from "@/utils/formatCurrency";
import { useRouter } from "next/router";

export default function House() {
  const router = useRouter();
  const { productId } = router.query;

  const product = mockhouses.find((house) => house.id === productId);

  if (!product) {
    return <main>Carregando produto</main>;
  }
  const { street, city, neighboorhood, number, state } = product.address;

  return (
    <main className="flex flex-col items-center justify-start min-h-screen max-w-screen-lg m-auto md:pt-20 pt-8 p-4">
      <div className="flex md:flex-row flex-col gap-20  items-center justify-center mb-8">
        <ProductImages product={product} />
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <h1 className="text-4xl font-bold mb-4">
            {formatCurrencyBRL(product.price)}{" "}
            {product.type === "aluguel" && "p/mês"}
          </h1>
          <p className="mb-8">
            {street}, {number} - {neighboorhood}, {city} - {state}
          </p>
          <div className="flex gap-4 mb-8">
            {product.amenities.map((amenitie, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={amenitie.iconImage}
                  alt={product.name}
                  className="w-8"
                />
                <p className="font-bold">{amenitie.value}</p>
                <p>{amenitie.name}</p>
              </div>
            ))}
          </div>
          <ContactButton />
        </div>
      </div>
      <DescriptionAccordion text={product.description} />
    </main>
  );
}
