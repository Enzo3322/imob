import { z } from "zod";

export const formSchemaUpdateHouse = z.object({
  name: z.string().min(1, {
    message: "Insira o nome do produto",
  }),
  description: z.string().min(1, {
    message: "Insira a descrição do produto",
  }),
  contact: z.object({
    phone: z.string().min(1, {
      message: "Insira o número de telefone de contato",
    }),
    email: z
      .string()
      .min(1, {
        message: "Insira o endereço de e-mail de contato",
      })
      .email({
        message: "Endereço de e-mail inválido",
      }),
    name: z.string().min(1, {
      message: "Insira o nome da pessoa de contato",
    }),
  }),
  type: z.string().refine((value) => ["aluguel", "compra"].includes(value), {
    message: "Tipo de transação inválido",
  }),
  price: z.number().min(0, {
    message: "Insira um preço válido",
  }),
  images: z.array(
    z.string().min(1, {
      message: "Insira URLs válidas para as imagens do produto",
    })
  ),
  specifications: z.object({
    bathroom: z.string().min(1, {
      message: "Insira o número de banheiros",
    }),
    vacancies: z.string().min(1, {
      message: "Insira o número de vagas de estacionamento",
    }),
    rooms: z.string().min(1, {
      message: "Insira o número de quartos",
    }),
    meters: z.string().min(1, {
      message: "Insira o número de metros quadrados",
    }),
  }),

  address: z.object({
    state: z.string().min(1, {
      message: "Insira o estado do endereço",
    }),
    city: z.string().min(1, {
      message: "Insira a cidade do endereço",
    }),
    street: z.string().min(1, {
      message: "Insira a rua do endereço",
    }),
    number: z.string().min(1, {
      message: "Insira o número do endereço",
    }),
    postalCode: z.string().min(1, {
      message: "Insira o código postal do endereço",
    }),
    neighboorhood: z.string().min(1, {
      message: "Insira o bairro do endereço",
    }),
  }),
});
