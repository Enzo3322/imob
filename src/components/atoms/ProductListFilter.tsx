import { addQueryParam, getQueryParam } from "@/utils/queryParams";
import { useEffect } from "react";

export default function ProductListFilter() {
  useEffect(() => {
    addQueryParam("uf", "São paulo");

    console.log(getQueryParam("uf"));
  }, []);

  return (
    <section>
      <h1>Filtro lista</h1>
    </section>
  );
}
