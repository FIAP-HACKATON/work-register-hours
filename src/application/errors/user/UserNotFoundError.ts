/* istanbul ignore file */

export class UserNotFoundError extends Error {
  constructor() {
    super('The User was not found');
    this.name = 'UserNotFoundError';
  }
}
