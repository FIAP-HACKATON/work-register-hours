import { UserEntity } from '../../domain/entities/User';
import { ProfileEnum } from '../../domain/enum/UserEnum';

export const user: UserEntity = {
  id: 1,
  name: 'Joao Maria',
  email: 'joao.maria@gmail.com',
  created_at: undefined,
  updated_at: undefined,
  password: '',
  matricula: '',
  parentId: 0
};

export const userResquest = {
  cpf: "35524867474",
  name: "Joao Maria",
  address: "Rua",
  phone: "89973391472",
  email:"joao.maria@gmail.com"
}
export const userResquestInvalid = {
  cpf: "35524867474",
  name: "Joao Mariaa",
  address: "Rua",
  phone: "89973391472",
  email:"joao.maria@gmail.com"
}

export const user2 = {
  id: 1,
  name: 'Joao Maria',
  email: 'joao.maria@gmail.com',
  phone: '89973391472',
  cpf: '35524867474',
  profile: 'ADMIN',
  created_at: undefined,
  updated_at: undefined,
};

export const userUpdate = {
  name: 'Joao Maria',
  email: 'joao.maria@gmail.com'
};

export const userEmailError: UserEntity = {
  id: 1,
  name: 'Joao Maria',
  email: 'joao.maria',
  created_at: undefined,
  updated_at: undefined,
  password: '',
  matricula: '',
  parentId: 0
};

export const userCPFError: UserEntity = {
  id: 1,
  name: 'Joao Maria',
  email: 'joao.maria@gmail.com',
  matricula: 'AAA',
  created_at: undefined,
  updated_at: undefined,
  password: '',
  parentId: 0
};
