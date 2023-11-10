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
import { useRouter } from "next/router";
import { mockhouses } from "@/mock";
import { formSchemaUpdateHouse } from "@/zod";

export default function EditHouse() {
  const router = useRouter();
  const { houseId } = router.query;

  const product = mockhouses.find((house) => house.id === houseId);

  const form = useForm<z.infer<typeof formSchemaUpdateHouse>>({
    resolver: zodResolver(formSchemaUpdateHouse),
  });

  const onSubmit = (values: z.infer<typeof formSchemaUpdateHouse>) => {
    console.log(values);
  };

  if (!product) {
    return <h1>Carregando registro...</h1>;
  }

  const fields = [
    "name",
    "description",
    "type",
    "contact.phone",
    "contact.email",
    "contact.name",
    "price",
    "images",
    "specifications.bathroom",
    "specifications.vacancies",
    "specifications.rooms",
    "specifications.meters",
    "address.state",
    "address.city",
    "address.street",
    "address.number",
    "address.postalCode",
    "address.neighboorhood",
  ];

  return (
    <main className=" max-w-screen-xl m-auto p-4 pt-12">
      <div className="min-h-screen flex items-start justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
            <div className="grid grid-cols-3 gap-2">
              {fields.map((fieldR) => (
                <FormField
                  key={fieldR}
                  control={form.control}
                  name={`${fieldR}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fieldR}</FormLabel>
                      <FormControl>
                        <Input placeholder={fieldR} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
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
