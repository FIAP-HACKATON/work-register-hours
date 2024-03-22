export type IUserDomain = {
  id: number;
  name: string;
  email: string;
  password: string;
  registration: string;
  parentId: number;
  created_at: Date;
  updated_at: Date;
};

export class UserEntity implements IUserDomain {
  id: number;
  name: string;
  email: string;
  password: string;
  registration: string;
  parentId: number;
  created_at: Date;
  updated_at: Date;

  constructor(props: IUserDomain) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.registration = props.registration;
    this.parentId = props.parentId;
    this.created_at = props.created_at;
    this.updated_at = props.updated_at;
  }

  static create(props: IUserDomain): UserEntity {
    return new UserEntity(props);
  }
}
