import { EmailInUseError } from "./EmailInUseError";

describe('EmailInUseError', () => {
  it('must be an instance of error', () => {
    const emailInUseError = new EmailInUseError();
    expect(emailInUseError).toBeInstanceOf(Error);
  });

  it('must be an correct message', () => {
    const emailInUseError = new EmailInUseError();
    expect(emailInUseError.message).toBe('Email is already in use');
  });

  it('must be an correct name', () => {
    const emailInUseError = new EmailInUseError();
    expect(emailInUseError.name).toBe('EmailInUseError');
  });
});
