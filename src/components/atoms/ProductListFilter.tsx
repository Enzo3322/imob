import { addQueryParam, getQueryParam } from "@/utils/queryParams";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

export default function ProductListFilter() {
  const searchByTerm = (key: string, term: string) => {
    addQueryParam(key, term);
  };

  return (
    <section>
      <div className="h-32 rounded bg-slate-100 border w-full items-center grid grid-cols-4 mb-8 gap-4 p-4">
        <div className="w-60">
          <label htmlFor="term">Localização do imóvel</label>
          <Input
            type="text"
            placeholder="Digite uma rua, bairro ou cidade"
            onBlur={(e) => searchByTerm("search", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="term">Modelo de contrato</label>
          <Select
            onValueChange={(e) => {
              searchByTerm("contract", e);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Comprar e Alugar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Contratos</SelectLabel>
                <SelectItem value="comprar e alugar">
                  Comprar e Alugar
                </SelectItem>
                <SelectItem value="comprar">Comprar</SelectItem>
                <SelectItem value="alugar">Alugar</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
