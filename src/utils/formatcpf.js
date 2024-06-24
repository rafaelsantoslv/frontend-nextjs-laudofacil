// utils/formatCpf.js

export function formatCpf(cpf) {
  // Verifica se o cpf é uma string, se não for, converte para string
  if (typeof cpf !== 'string') {
    cpf = String(cpf);
  }

  // Remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, '');

  // Verifica se o cpf tem pelo menos 11 caracteres
  if (cpf.length !== 11) {
    return cpf; // Retorna o cpf sem formatação se não tiver 11 caracteres
  }

  // Aplica a formatação desejada
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
