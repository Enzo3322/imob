import { addQueryParams } from "@/utils/queryParams";
import { AiOutlineSearch } from "react-icons/ai";
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
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function ProductListFilter() {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const applyFilter = () => {
    addQueryParams(filters);
  };

  return (
    <div className="flex flex-col items-left w-full rounded bg-slate-100 border mb-8 gap-4 p-4">
      <div className="w-full">
        <label htmlFor="term">Localização do imóvel</label>
        <Input
          className="w-full"
          type="text"
          placeholder="Digite uma rua, bairro ou cidade"
          onBlur={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>
      <div className="w-full ">
        <label htmlFor="term">Modelo de contrato</label>
        <Select
          onValueChange={(e) => {
            setFilters({ ...filters, type: e });
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Comprar e Alugar" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Contratos</SelectLabel>
              <SelectItem value="comprar e alugar">Comprar e Alugar</SelectItem>
              <SelectItem value="comprar">Comprar</SelectItem>
              <SelectItem value="alugar">Alugar</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={applyFilter}
        className="text-center flex items-center justify-center gap-2 text-base w-full"
      >
        <AiOutlineSearch size="22" />
        Buscar
      </Button>
    </div>
  );
}
