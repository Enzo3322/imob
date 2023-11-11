import { Product } from "@/types";

// Mock 1
export const mockhouses: Product[] = [
  {
    id: "5dd7abe3-4988-42d1-bc96-1fa8b11e7e46",
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
      "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?w=1800&t=st=1699671198~exp=1699671798~hmac=29e3472d928cc1b1fc24b2b0ef9c1f886f6cf497490ba56913a5e8a7ad00c348",
      "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-modelo-de-casa_23-2150799631.jpg?w=2000&t=st=1699671297~exp=1699671897~hmac=9dc8a0faf326d11f8b76b24920b73f820aa4ab6342003db96c528fe277074fe1",
    ],
    specifications: {
      bathroom: "2",
      vacancies: "3",
      rooms: "4",
      meters: "150",
    },
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
    id: "b7ea0b46-c2b1-469d-aec7-5cb77f33b4e3",
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
      "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?w=1800&t=st=1699671198~exp=1699671798~hmac=29e3472d928cc1b1fc24b2b0ef9c1f886f6cf497490ba56913a5e8a7ad00c348",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-modelo-de-casa_23-2150799631.jpg?w=2000&t=st=1699671297~exp=1699671897~hmac=9dc8a0faf326d11f8b76b24920b73f820aa4ab6342003db96c528fe277074fe1",
    ],
    specifications: {
      bathroom: "2",
      vacancies: "3",
      rooms: "4",
      meters: "150",
    },
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
    id: "5481a2f7-2679-4690-bddb-32dddd955964",
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
      "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-modelo-de-casa_23-2150799631.jpg?w=2000&t=st=1699671297~exp=1699671897~hmac=9dc8a0faf326d11f8b76b24920b73f820aa4ab6342003db96c528fe277074fe1",
      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg",
      "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?w=1800&t=st=1699671198~exp=1699671798~hmac=29e3472d928cc1b1fc24b2b0ef9c1f886f6cf497490ba56913a5e8a7ad00c348",
    ],
    specifications: {
      bathroom: "2",
      vacancies: "3",
      rooms: "4",
      meters: "150",
    },
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
    id: "829dcd12-6451-4c29-8db6-62e1a5db2374",
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
      "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?w=1800&t=st=1699671198~exp=1699671798~hmac=29e3472d928cc1b1fc24b2b0ef9c1f886f6cf497490ba56913a5e8a7ad00c348",
      "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-modelo-de-casa_23-2150799631.jpg?w=2000&t=st=1699671297~exp=1699671897~hmac=9dc8a0faf326d11f8b76b24920b73f820aa4ab6342003db96c528fe277074fe1",
    ],
    specifications: {
      bathroom: "2",
      vacancies: "3",
      rooms: "4",
      meters: "150",
    },
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
    id: "f530522e-dfa0-4383-a431-a91ef7f1494e",
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
      "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?w=1800&t=st=1699671198~exp=1699671798~hmac=29e3472d928cc1b1fc24b2b0ef9c1f886f6cf497490ba56913a5e8a7ad00c348",
      "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-modelo-de-casa_23-2150799631.jpg?w=2000&t=st=1699671297~exp=1699671897~hmac=9dc8a0faf326d11f8b76b24920b73f820aa4ab6342003db96c528fe277074fe1",
    ],
    specifications: {
      bathroom: "2",
      vacancies: "3",
      rooms: "4",
      meters: "150",
    },
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
    id: "b0eb59fa-72c6-4882-b46d-9880338801d1",
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
      "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?w=1800&t=st=1699671198~exp=1699671798~hmac=29e3472d928cc1b1fc24b2b0ef9c1f886f6cf497490ba56913a5e8a7ad00c348",
      "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-modelo-de-casa_23-2150799631.jpg?w=2000&t=st=1699671297~exp=1699671897~hmac=9dc8a0faf326d11f8b76b24920b73f820aa4ab6342003db96c528fe277074fe1",
    ],
    specifications: {
      bathroom: "2",
      vacancies: "3",
      rooms: "4",
      meters: "150",
    },
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
    id: "295047ca-1ad9-46fd-8d00-25d21e7f852f",
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
      "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?w=1800&t=st=1699671198~exp=1699671798~hmac=29e3472d928cc1b1fc24b2b0ef9c1f886f6cf497490ba56913a5e8a7ad00c348",
      "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-modelo-de-casa_23-2150799631.jpg?w=2000&t=st=1699671297~exp=1699671897~hmac=9dc8a0faf326d11f8b76b24920b73f820aa4ab6342003db96c528fe277074fe1",
    ],
    specifications: {
      bathroom: "2",
      vacancies: "3",
      rooms: "4",
      meters: "150",
    },
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

export const mockFeed = [
  {
    id: "1",
    houseId: "295047ca-1ad9-46fd-8d00-25d21e7f852f",
    status: "Aberto",
    contactInfo: {
      phone: "9 9999999999",
      name: "Thiago Gomes",
    },
  },
  {
    id: "2",
    houseId: "295047ca-1ad9-46fd-8d00-25d21e7f852f",
    status: "Contatado",
    contactInfo: {
      phone: "9 9999999999",
      name: "Vitor Santos",
    },
  },
];
