export const validatePassword = (password: string): void => {
  if (!password) throw new Error('비밀번호를 입력해주세요.'); //TODO: error message 분리
  if (password.length < 8) throw new Error('비밀번호는 8자 이상이어야 합니다.');
  if (!/[A-Z]/.test(password)) throw new Error('대문자를 포함해야 합니다.');
  if (!/[0-9]/.test(password)) throw new Error('숫자를 포함해야 합니다.');
  if (!/[!@#$%^&*]/.test(password)) throw new Error('특수문자를 포함해야 합니다.');
}
