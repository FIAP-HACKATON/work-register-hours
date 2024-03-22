export interface GetUserAccessRepository {
  getUserAccess(queryString: GetUserAccessRepository.Request);
}
export namespace GetUserAccessRepository {
  export type Request = { email?: string; password?: string };
}
