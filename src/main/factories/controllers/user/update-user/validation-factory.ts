import { ValidationComposite } from '../../../../../infra//http/validations/ValidationComposite';
import { EmailValidation } from '../../../../../infra/http/validations/EmailValidation';
import { CpfValidation } from '../../../../../infra/http/validations/CpfValidation';
import { NumberValidatorAdapter } from '../../../../../infra/http/validators/NumberValidatorAdapter';
import { EnumValidatorAdapter } from '../../../../../infra/http/validators/EnumValidatorAdapter';
import { EnumFieldValidation } from '../../../../../infra/http/validations/EnumFieldValidation';
import { NumberFieldValidation } from '../../../../../infra/http/validations/NumberFieldValidation';
import { ProfileEnum } from '../../../../../domain/enum/UserEnum';
import { EmailValidatorAdapter } from '../../../../../infra/http/validators/EmailValidatorAdapter';
import { CPfValidatorAdapter } from '../../../../../infra/http/validators/CpfValidatorAdapter';

export const makeUpdateUserValidation = (): ValidationComposite => {
  const emailValidator = new EmailValidatorAdapter();
  const cpfValidator = new CPfValidatorAdapter();
  const numberValidator = new NumberValidatorAdapter();
  const enumValidator = new EnumValidatorAdapter();

  return new ValidationComposite(
    [
      new EmailValidation('email', emailValidator),
      new CpfValidation('cpf', cpfValidator),
      new EnumFieldValidation('profile', enumValidator, ProfileEnum),
      new NumberFieldValidation('phone', numberValidator),
    ],
    'body',
  );
};
