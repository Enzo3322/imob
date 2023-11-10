import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { Label } from "../ui/label";

export function ContactButton() {
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Enviamos seu contato com sucesso",
      description:
        "Agora só aguardar um de nossos corretores entrar em contato",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-base text-white p-4 rounded">
          Tenho interesse
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Vamos enviar o seu contato ao responsável do imóvel
          </AlertDialogTitle>
          <AlertDialogDescription>
            Agora só precisamos de alguns dados para enviar a sua mensagem!
          </AlertDialogDescription>
          <div className="flex flex-col gap-4 mt-[24px!important]">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" placeholder="Nome completo" />
            <Label htmlFor="phone">Celular</Label>
            <Input
              id="phone"
              placeholder="(13) 9 9999-9999"
              type="tel"
              maxLength={13}
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Enviar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
