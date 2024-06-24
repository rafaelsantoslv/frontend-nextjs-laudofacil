'use client';
import Image from 'next/image';
import PacienteTable from '@/components/PacienteTable';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-1">
        <main className="flex-1 text-slate-950">

          <PacienteTable />
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
