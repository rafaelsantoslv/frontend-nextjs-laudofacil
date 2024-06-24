import { PacienteInterface } from '@/interfaces/Paciente';
import { formatCpf } from '@/utils/formatcpf';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { TableRow, TableCell } from '../ui/table';
import { User } from 'lucide-react';

interface PacienteRowProps {
  paciente: PacienteInterface;
}

export default function PacienteRow({ paciente }: PacienteRowProps) {
  const router = useRouter();

  const handleButtonClick = (cpf: number) => {
    router.push(`/detalhes/${cpf}`);
  };

  return (
    <TableRow key={paciente.id} className='text-center'>
      <TableCell className='justify-center'><User /></TableCell>
      <TableCell>{paciente.nome}</TableCell>
      <TableCell>{formatCpf(paciente.cpf)}</TableCell>
      <TableCell>
        {new Date(paciente.dataNascimento).toLocaleDateString('pt-BR')}
      </TableCell>
      <TableCell>
        <Button
          onClick={() => handleButtonClick(paciente.cpf)}
          variant="outline"
          className="text-blue-500 hover:bg-blue-100"
        >
          Abrir
        </Button>
      </TableCell>
    </TableRow>
  );
}
