import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaUpdateHouse } from "@/zod";
import ReactMarkdown from "react-markdown";
import { Textarea } from "@/components/ui/textarea";

export default function EditHouse() {
  const form = useForm<z.infer<typeof formSchemaUpdateHouse>>({
    resolver: zodResolver(formSchemaUpdateHouse),
  });

  const onSubmit = (values: z.infer<typeof formSchemaUpdateHouse>) => {
    console.log(values);
  };

  return (
    <main className=" max-w-screen-xl m-auto p-4 pt-12">
      <div className="min-h-screen flex items-start justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
            <div className="grid grid-cols-3 gap-2">
              <FormField
                control={form.control}
                name={`name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do imóvel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`price`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome do imóvel"
                        {...field}
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`address.state`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estato</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: São Paulo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`address.city`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Santos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`address.neighboorhood`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bairro</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome Bairro" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`address.street`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rua</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da Rua" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`address.number`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número</FormLabel>
                    <FormControl>
                      <Input placeholder="Número do endereço" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`specifications.meters`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Metros quadrados</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 95" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`specifications.bathroom`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banheiros</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 1" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`specifications.rooms`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quartos</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 2" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`specifications.vacancies`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vagas na garagem</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Nome do imóvel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <div className="markdown-style-wrapper rounded p-2">
                      <p className="text-gray-600">
                        Abaixo segue é como seu texto será exibido:
                      </p>
                      <ReactMarkdown>{field.value}</ReactMarkdown>
                    </div>
                  </>
                )}
              />
            </div>

            <div className="flex gap-2">
              <Button type="reset" className="w-full mt-4">
                Cancelar
              </Button>
              <Button type="submit" className="w-full mt-4">
                Salvar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
