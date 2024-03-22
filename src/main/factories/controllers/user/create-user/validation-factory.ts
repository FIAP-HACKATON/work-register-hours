import { ValidationComposite } from '../../../../../infra//http/validations/ValidationComposite';
import { RequiredFieldValidation } from '../../../../../infra//http/validations/RequiredFieldValidation';
import { EmailValidation } from '../../../../../infra/http/validations/EmailValidation';
import { EmailValidatorAdapter } from '../../../../../infra/http/validators/EmailValidatorAdapter';

export const makeCreateUserValidation = (): ValidationComposite => {
  const emailValidator = new EmailValidatorAdapter();

  return new ValidationComposite(
    [
      new RequiredFieldValidation('name'),
      new RequiredFieldValidation('email'),
      new EmailValidation('email', emailValidator),
      new RequiredFieldValidation('registration'),
      new RequiredFieldValidation('password'),
    ],
    'body',
  );
};
