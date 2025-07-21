export const validateEmail = (email: string): string | null => {
  if (!email) return '이메일을 입력해주세요.'; //TODO: error message 분리

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //TODO: regex 분리
  if (!emailRegex.test(email)) return '이메일 형식이 올바르지 않습니다.';
  
  return null;
}
