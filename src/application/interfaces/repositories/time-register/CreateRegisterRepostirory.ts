import { TimeRegisterEntity } from '@domain/entities/time-register';

export interface CreateRegisterRepository {
  execute(data: any ): Promise<any>;
}

export namespace CreateUserRepository {
  export type Request = Omit<Partial<TimeRegisterEntity>, 'id' | 'created_at' | 'updated_at'>;
}