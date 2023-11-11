/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types";
import { useState } from "react";

export default function ProductImages({ product }: { product: Product }) {
  const images = product.images;

  const [currentImage, setCurrentImage] = useState(images[0]);

  const selectImage = (index: number) => {
    setCurrentImage(images[index]);
  };

  return (
    <section className="md:w-[50%] w-full">
      <div className="mb-4 max-w-full flex items-center justify-center bg-slate-200 rounded">
        <img
          src={currentImage}
          alt={product.name}
          className="rounded md:max-h-80 max-h-48"
        />
      </div>
      <div className="flex gap-4">
        <div className="w-screen whitespace-nowrap overflow-x-auto">
          <div className="flex w-max space-x-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => selectImage(i)}
                className={`${currentImage === image ? "selected" : ""}`}
              >
                <img
                  src={image}
                  alt={product.name}
                  className=" w-20 h-20 rounded"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
