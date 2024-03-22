export interface GetUserAccessRepository {
  getUserAccess(queryString: GetUserAccessRepository.Request);
}
export namespace GetUserAccessRepository {
  export type Request = {
    name?: string;
    registration?: string;
    password: string;
  };
}
