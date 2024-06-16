import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 h-screen">
          <nav className="h-full flex flex-col bg-white border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
            <Image
              src="https://img.logoipsum.com/243.svg"
              alt=""
              width={150}
              height={150}
              className={`overflow-hidden, transition-all`}
            
            />
            </div>
            <div className="text-black">
              <ul>Pacientes</ul>
              <ul>Pacientes</ul>
              <ul>Pacientes</ul>
              <ul>Pacientes</ul>
              <ul>Pacientes</ul>
              <ul>Pacientes</ul>
            </div>
          </nav>
        </aside>
        <main className="flex-1">
          <div className="p-6 max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <form className="flex items-center">
                <Input name="nome" placeholder="Nome Paciente"  className="w-auto text-black"/>
              </form>

              <Button variant={"outline"}>Novo Paciente</Button>
            </div>
            <Table>
              <TableCaption>Lista de Pacientes Encontrados</TableCaption>
              <TableHeader>
                <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Sobrenome</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Data Nascimento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow key={1}>
                  <TableCell>RAFAEL</TableCell>
                  <TableCell>SANTOS</TableCell>
                  <TableCell>123.456.789-10</TableCell>
                  <TableCell>01/01/2001</TableCell>
                  <TableCell><Button variant={"outline"}>Abrir</Button></ TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
      <footer>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
      </footer>
    </div>
  );
}
