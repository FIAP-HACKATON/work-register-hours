export class UserCredentialInvalidError extends Error {
  constructor() {
    super('User credential invalid');
    this.name = 'UserCredentialInvalidError';
  }
}
