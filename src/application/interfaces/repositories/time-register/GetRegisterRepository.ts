export interface GetRegisterRepository {
  getRegistration(data: GetRegisterRepository.Request): Promise<any>;
}

export namespace GetRegisterRepository {
  export type Request = {
    initial_date: Date;
    final_date?: Date;
  };
}
