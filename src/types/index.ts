export interface Product {
  id: string;
  name: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    name: string;
  };
  type: ProductType;
  images: string[];
  specifications: {
    bathroom: string;
    vacancies: string;
    rooms: string;
    meters: string;
    animals: string;
    furniture: string;
  };
  address: {
    uf: string;
    long_uf: string;
    city: string;
    street: string;
    number: string;
    postalCode: string;
    neighboorhood: string;
  };
  additionalPrice: Price[];
  price: number;
  flags?: string[];
}

type Price = {
  name: string;
  value: number;
};

export type ProductType =
  | "aluguel"
  | "compra"
  | "temporada"
  | "lançamento"
  | "terreno";

export interface FeedItem {
  id: string;
  houseId: string;
  status: string;
  contactInfo: {
    phone: string;
    name: string;
  };
}
