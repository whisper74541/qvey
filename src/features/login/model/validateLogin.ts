import { validateEmail, validatePassword } from "../../../shared/lib/validators";
import type { LoginValues } from "../types";

export const validateLogin = (values: LoginValues): boolean => {
  try {
    validateEmail(values.email);
    validatePassword(values.password);
    return true;
  } catch (err: unknown) {
    if (err instanceof Error) {
      alert(err.message);
    } else {
      alert("알 수 없는 오류가 발생했습니다.")
    }
    return false;
  }
};
