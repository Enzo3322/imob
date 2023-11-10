export interface Product {
  id: string;
  name: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    name: string;
  };
  type: "aluguel" | "compra";
  price: number;
  images: string[];
  amenities: {
    iconImage: string;
    name: string;
    value: string;
  }[];
  flags: string[];
  address: {
    state: string;
    city: string;
    street: string;
    number: string;
    postalCode: string;
    neighboorhood: string;
  };
}
