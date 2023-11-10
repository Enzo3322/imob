import { useState } from "react";
import { Button } from "../ui/button";

export default function DescriptionAccordion({ text }: Record<string, string>) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="flex flex-col items-center">
        <p className="text-slate-900 mb-4">
          {text.split(" ").slice(0, 40).join(" ")}...
        </p>
        <Button className="w-32" onClick={() => setOpen(true)} variant="link">
          Ver mais
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center ">
      <p className="text-slate-900 mb-4">{text}</p>
      <Button className="w-32" onClick={() => setOpen(false)} variant="link">
        Ver menos
      </Button>
    </div>
  );
}
