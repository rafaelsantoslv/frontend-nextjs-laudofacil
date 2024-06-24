'use client'

import React, { useEffect, useState, useCallback } from 'react';
import { Table, TableCaption, TableHeader, TableHead, TableBody, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { pacientes } from '@/data/pacientes';
import { useRouter } from 'next/navigation';
import PacienteRow from './PacienteRow';
import { PacienteInterface } from '@/interfaces/Paciente';
import { Button } from '../ui/button';
import { CreatePaciente } from '../CreatePaciente';


const PacienteTable: React.FC = () => {
  const router = useRouter();
  const [pacienteList, setPacienteList] = useState<PacienteInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [open, setOpen] = useState(false)
  

  useEffect(() => {
    setPacienteList(pacientes);
  }, []);

  const filterPacientes = useCallback(() => {
    const filteredPacientes = pacientes.filter((paciente) => {
      return (
        paciente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paciente.cpf.toString().includes(searchTerm)
      );
    });

    const sortedPacientes = [...filteredPacientes].sort((a, b) => {
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
      return 0;
    });

    setPacienteList(sortedPacientes);
  }, [searchTerm]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      filterPacientes();
    }, 300); // Debounce time: 300ms

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, filterPacientes]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleNext = () => {
    // Redireciona para a página de preenchimento de dados do paciente
    router.push("/preencher-dados-paciente");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-4 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
          <Input
            name="consulta"
            placeholder="Pesquisar...       Ex: Por nome: Rafael dos Santos Batista, Por CPF: 12345678910"
            className="flex-1 px-4 py-2 text-lg text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant={'default'} onClick={handleOpenDialog}>Adicionar Paciente</Button>
        </form>
      </div>
      <Table className="w-full">
        <TableCaption className="sr-only">
          Lista de Pacientes Encontrados
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Foto</TableHead>
            <TableHead className='text-center'>Nome Completo</TableHead>
            <TableHead className='text-center'>Documento</TableHead>
            <TableHead className='text-center'>Data de Nascimento</TableHead>
            <TableHead className='text-center'>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pacienteList.map((paciente) => (
            <PacienteRow paciente={paciente} key={paciente.id} /> 
          ))}
        </TableBody>
      </Table>
      <CreatePaciente open={open} onOpenChange={setOpen} onClose={handleCloseDialog} onNext={handleNext} />
    </div>
  );
};

export default PacienteTable;
