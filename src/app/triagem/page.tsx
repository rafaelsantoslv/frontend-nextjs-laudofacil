'use client'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React, { useEffect, useState } from 'react'

const coresPrioridades = {
    verde: 'bg-green-400',
    amarela: 'bg-yellow-400',
    vermelha: 'bg-red-400',
}

const pacientesMock = [
    { id: 1, nome: 'João Silva', dr: 'Dr. Mendes', especialidade: 'Clínico Geral', gravidade: 'vermelha', tempoEspera: 0 },
    { id: 2, nome: 'Maria Oliveira', dr: 'Dr. Souza', especialidade: 'Cardiologista', gravidade: 'amarela', tempoEspera: 0 },
    { id: 3, nome: 'Carlos Pereira', dr: 'Dr. Lima', especialidade: 'Pediatra', gravidade: 'verde', tempoEspera: 0 },
  ];

const Triagem = () => {
const [pacientess, setPacientes] = useState(pacientesMock);
    
useEffect(() => {
    const interval = setInterval(() => {
      setPacientes(prevPacientes =>
        prevPacientes.map(paciente => ({
          ...paciente,
          tempoEspera: paciente.tempoEspera + 1,
        }))
      );
    }, 1000); // Atualiza o tempo de espera a cada segundo (1000ms)

    return () => clearInterval(interval);
  }, []);

  const formatTempoEspera = (segundos: number) => {
    const horas = Math.floor(segundos / 3600);
    const mins = Math.floor((segundos % 3600) / 60);
    const secs = segundos % 60;
    return `${horas}h ${mins}min ${secs}s`;
  };

  return (
    <div className='p-6 max-w-7xl mx-auto space-y-4 bg-white shadow-md rounded-md'>
        <div className='mb-4'>
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-2'>Pacientes Aguardando Atendimento</h1>
        </div>
        <Table className="w-full">
            <TableCaption className="sr-only">
              Lista de Pacientes Encontrados
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className='text-center'>Nome Completo</TableHead>
                    <TableHead className='text-center'>Doutor Responsável</TableHead>
                    <TableHead className='text-center'>Especialidade</TableHead>
                    <TableHead className='text-center'>Tempo de espera</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {pacientess.map((paciente) => (
                    <TableRow key={paciente.id} className={`text-center ${coresPrioridades[paciente.gravidade]}`}>
                        <TableCell>{paciente.nome}</TableCell>
                        <TableCell>{paciente.dr}</TableCell>
                        <TableCell>{paciente.especialidade}</TableCell>
                        <TableCell>{formatTempoEspera(paciente.tempoEspera)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            
        </Table>
        <div className="mt-4">
        <h2 className="text-xl font-semibold">Legenda:</h2>
        <div className="flex items-center mt-2">
          <span className="inline-block w-4 h-4 mr-2 rounded-full bg-green-400"></span>
          <p>Verde: Baixa gravidade (Menos de 2 horas de espera)</p>
        </div>
        <div className="flex items-center mt-2">
          <span className="inline-block w-4 h-4 mr-2 rounded-full bg-yellow-400"></span>
          <p>Amarela: Média gravidade (Menos de 1 hora de espera)</p>
        </div>
        <div className="flex items-center mt-2">
          <span className="inline-block w-4 h-4 mr-2 rounded-full bg-red-400"></span>
          <p>Vermelha: Alta gravidade (Menos de 30 minutos de espera)</p>
        </div>
      </div>
    </div>
  )
}

export default Triagem