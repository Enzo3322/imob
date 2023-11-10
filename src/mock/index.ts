import { Product } from "@/types";

// Mock 1
export const mockhouses: Product[] = [
  {
    id: "1",
    name: "Casa Espaçosa",
    description:
      "Bem-vindo à sua futura casa dos sonhos! Esta encantadora residência, localizada em um bairro tranquilo e arborizado, oferece uma combinação perfeita de elegância e conforto. Com uma fachada imponente, esta casa de dois andares exibe um charme clássico, complementado por jardins meticulosamente cuidados que proporcionam uma atmosfera serena. Ao entrar, você será recebido por espaços amplos e luminosos. A sala de estar, com sua lareira acolhedora, é ideal para relaxar em noites aconchegantes. A cozinha gourmet, equipada com eletrodomésticos modernos e bancadas de granito, é um convite à culinária refinada. Os quartos espaçosos oferecem refúgios privados, enquanto a suíte principal impressiona com um banheiro luxuoso e um closet generoso. Além disso, a casa conta com uma área de entretenimento versátil, que pode ser adaptada para atender às suas necessidades, seja como um escritório em casa ou uma sala de jogos. O quintal, cercado por uma paisagem exuberante, apresenta um deck espaçoso, perfeito para reuniões ao ar livre e momentos de lazer. Esta propriedade é um convite para criar memórias duradouras e viver uma vida de sofisticação e conforto. Não perca a oportunidade de fazer desta casa o seu lar!",
    type: "compra",
    contact: {
      email: "teste@gmail.com",
      name: "Corretor Thiago",
      phone: "13 9 8080-8080",
    },
    price: 350000,
    images: [
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
    ],
    amenities: [
      { iconImage: "icon1.jpg", name: "Quartos", value: "3" },
      { iconImage: "icon2.jpg", name: "Banheiros", value: "2" },
      { iconImage: "icon3.jpg", name: "Área Externa", value: "Sim" },
    ],
    flags: ["Pronto para morar", "Aceita financiamento"],
    address: {
      state: "São Paulo",
      city: "São Paulo",
      street: "Rua das Flores",
      number: "123",
      postalCode: "12345-678",
      neighboorhood: "Jardim Bela Vista",
    },
  },
  {
    id: "2",
    name: "Apartamento Moderno",
    description: "Apartamento com design moderno e vista panorâmica.",
    type: "aluguel",
    contact: {
      email: "teste@gmail.com",
      name: "Corretor Thiago",
      phone: "13 9 8080-8080",
    },
    price: 2500,
    images: [
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
    ],
    amenities: [
      { iconImage: "icon4.jpg", name: "Quartos", value: "2" },
      { iconImage: "icon5.jpg", name: "Banheiros", value: "1" },
      { iconImage: "icon6.jpg", name: "Varanda", value: "Sim" },
    ],
    flags: ["Condomínio incluído", "Mobiliado"],
    address: {
      state: "Rio de Janeiro",
      city: "Rio de Janeiro",
      street: "Avenida Principal",
      number: "456",
      postalCode: "54321-876",
      neighboorhood: "Copacabana",
    },
  },
  {
    id: "3",
    name: "Cobertura de Luxo",
    description: "Cobertura elegante com piscina privativa.",
    type: "compra",
    contact: {
      email: "teste@gmail.com",
      name: "Corretor Thiago",
      phone: "13 9 8080-8080",
    },
    price: 1200000,
    images: [
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
    ],
    amenities: [
      { iconImage: "icon7.jpg", name: "Quartos", value: "4" },
      { iconImage: "icon8.jpg", name: "Banheiros", value: "3" },
      {
        iconImage: "https://cdn-icons-png.flaticon.com/512/2088/2088136.png",
        name: "Piscina",
        value: "Sim",
      },
    ],
    flags: ["Segurança 24h", "Aceita permuta"],
    address: {
      state: "Minas Gerais",
      city: "Belo Horizonte",
      street: "Rua Nobre",
      number: "789",
      postalCode: "98765-432",
      neighboorhood: "Luxville",
    },
  },

  {
    id: "1",
    name: "Casa Espaçosa",
    description: "Linda casa com amplo espaço interno e jardim.",
    type: "compra",
    contact: {
      email: "teste@gmail.com",
      name: "Corretor Thiago",
      phone: "13 9 8080-8080",
    },
    price: 350000,
    images: [
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
    ],
    amenities: [
      { iconImage: "icon1.jpg", name: "Quartos", value: "3" },
      { iconImage: "icon2.jpg", name: "Banheiros", value: "2" },
      { iconImage: "icon3.jpg", name: "Área Externa", value: "Sim" },
    ],
    flags: ["Pronto para morar", "Aceita financiamento"],
    address: {
      state: "São Paulo",
      city: "São Paulo",
      street: "Rua das Flores",
      number: "123",
      postalCode: "12345-678",
      neighboorhood: "Jardim Bela Vista",
    },
  },
  {
    id: "2",
    name: "Apartamento Moderno",
    description: "Apartamento com design moderno e vista panorâmica.",
    type: "aluguel",
    contact: {
      email: "teste@gmail.com",
      name: "Corretor Thiago",
      phone: "13 9 8080-8080",
    },
    price: 2500,
    images: [
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
    ],
    amenities: [
      { iconImage: "icon4.jpg", name: "Quartos", value: "2" },
      { iconImage: "icon5.jpg", name: "Banheiros", value: "1" },
      { iconImage: "icon6.jpg", name: "Varanda", value: "Sim" },
    ],
    flags: ["Condomínio incluído", "Mobiliado"],
    address: {
      state: "Rio de Janeiro",
      city: "Rio de Janeiro",
      street: "Avenida Principal",
      number: "456",
      postalCode: "54321-876",
      neighboorhood: "Copacabana",
    },
  },
  {
    id: "3",
    name: "Cobertura de Luxo",
    description: "Cobertura elegante com piscina privativa.",
    type: "compra",
    contact: {
      email: "teste@gmail.com",
      name: "Corretor Thiago",
      phone: "13 9 8080-8080",
    },
    price: 1200000,
    images: [
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
    ],
    amenities: [
      { iconImage: "icon7.jpg", name: "Quartos", value: "4" },
      { iconImage: "icon8.jpg", name: "Banheiros", value: "3" },
      {
        iconImage: "https://cdn-icons-png.flaticon.com/512/2088/2088136.png",
        name: "Piscina",
        value: "Sim",
      },
    ],
    flags: ["Segurança 24h", "Aceita permuta"],
    address: {
      state: "Minas Gerais",
      city: "Belo Horizonte",
      street: "Rua Nobre",
      number: "789",
      postalCode: "98765-432",
      neighboorhood: "Luxville",
    },
  },
  {
    id: "4",
    name: "Kitnet Charmosa",
    description: "Kitnet compacta e charmosa no coração da cidade.",
    type: "aluguel",
    contact: {
      email: "teste@gmail.com",
      name: "Corretor Thiago",
      phone: "13 9 8080-8080",
    },
    price: 1200,
    images: [
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
    ],
    amenities: [
      { iconImage: "icon10.jpg", name: "Quarto", value: "1" },
      { iconImage: "icon11.jpg", name: "Banheiro", value: "1" },
      { iconImage: "icon12.jpg", name: "Cozinha", value: "Equipada" },
    ],
    flags: ["Mobília inclusa", "Aceita pets"],
    address: {
      state: "São Paulo",
      city: "São Paulo",
      street: "Rua do Centro",
      number: "101",
      postalCode: "54321-098",
      neighboorhood: "Centro Histórico",
    },
  },
];
