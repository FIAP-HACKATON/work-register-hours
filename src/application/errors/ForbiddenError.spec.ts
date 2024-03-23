import { ForbiddenError } from "./ForbiddenError";

describe('ForbiddenError', () => {
  it('must be an error', () => {
    const forbiddenError = new ForbiddenError();
    expect(forbiddenError).toBeInstanceOf(Error);
  });

  it('must be an correct message', () => {
    const forbiddenError = new ForbiddenError();
    expect(forbiddenError.message).toBe('Forbidden');
  });

  it('must be an correct name', () => {
    const forbiddenError = new ForbiddenError();
    expect(forbiddenError.name).toBe('ForbiddenError');
  });
});
