export interface GetRegisterRepository {
  getRegistration(data: GetRegisterRepository.Request): Promise<any>;
}

export namespace GetRegisterRepository {
  export type Request = {
    filter_date: string;
  };
}
