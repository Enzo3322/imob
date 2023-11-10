/* eslint-disable @next/next/no-img-element */
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
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex md:flex-row flex-col gap-20 max-w-screen-lg items-center justify-center p-4">
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
                <img src={amenitie.iconImage} alt={product.name} />
                <p className="font-bold">{amenitie.value}</p>
                <p>{amenitie.name}</p>
              </div>
            ))}
          </div>
          <button className="bg-green-600 text-base text-white p-4 rounded">
            Tenho interesse
          </button>
        </div>
      </div>
    </main>
  );
}
