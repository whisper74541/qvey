import { validateEmail, validatePassword } from "../../../shared/lib/validators";
import type { LoginErrors, LoginValues } from "../types";

export const validateLogin = (values:LoginValues):LoginErrors => {
  const errors: LoginErrors = {};

  const emailError = validateEmail(values.email);
  if (emailError) {
    errors.email = emailError;
  }

  const passwordError = validatePassword(values.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  return errors;
}
