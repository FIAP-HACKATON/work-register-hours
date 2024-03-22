import { ValidationComposite } from '../../../../../infra/http/validations/ValidationComposite';
import { EmailValidation } from '../../../../../infra/http/validations/EmailValidation';
import { EmailValidatorAdapter } from '../../../../../infra/http/validators/EmailValidatorAdapter';
import { CPfValidatorAdapter } from '../../../../../infra/http/validators/CpfValidatorAdapter';
import { RequiredFieldValidation } from '../../../../../infra/http/validations/RequiredFieldValidation';

export const makeGetUserAccessValidation = (): ValidationComposite => {
  const emailValidator = new EmailValidatorAdapter();

  return new ValidationComposite([new EmailValidation('email', emailValidator), new RequiredFieldValidation('password')], 'body');
};
