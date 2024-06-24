import { faker } from '@faker-js/faker';

export const pacientes = Array.from({ length: 100 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    nome: faker.person.fullName(),
    cpf: faker.number.int({ min: 10000000000, max: 99999999999 }),
    dataNascimento: faker.date.recent({ days: 30 }),
    sexo: 'masculino',
    email: faker.internet.email(),
    telefone: faker.phone.number(),
  };
});
