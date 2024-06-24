'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";


interface CreatePacienteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  onNext: () => void;
}

export function CreatePaciente({ open, onOpenChange, onClose, onNext }: any) {

 
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen bg-white text-dark-color">
        <DialogHeader>
          <DialogTitle className="text-primary">Adicionar Paciente</DialogTitle>
          <DialogDescription className="text-secondary">
            Preencha os dados do novo paciente. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-dark-color">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Nome do Paciente"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cpf" className="text-right text-dark-color">
              CPF
            </Label>
            <Input
              id="cpf"
              placeholder="CPF do Paciente"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dataNascimento" className="text-right text-dark-color">
              Data de Nascimento
            </Label>
            <Input
              id="dataNascimento"
              type="date"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-primary text-light-color" onClick={onNext}>
            Próximo
          </Button>
          <Button type="button" variant="outline" className="border-primary text-primary" onClick={onClose}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
