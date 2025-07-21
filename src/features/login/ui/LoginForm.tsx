import { useState } from "react"
import type { LoginErrors, LoginValues } from "../types"
import { useLogin, validateLogin } from "../model";

const LoginForm = () => {
  const { login, error: loginError, loading } = useLogin();

  // TODO: 폼 초기값(model/initialVlaues.ts)로 분리
  const initialValue: LoginValues = {
    email: '',
    password: ''
  };

  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [errors, setErrors] = useState<LoginErrors>({});

  // onFocus -> onChange -> onBlur
  // TODO: useLoginForm() -> 로직 분리 예정
  //기존 에러 제거
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    if (errors[name as keyof LoginErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  //입력값 반영 후 업데이트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  //해당 필드 유효성 검사, 에러 상태 업데이트
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const validationErrors = validateLogin(values);

    if (validationErrors[name as keyof LoginErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name as keyof LoginErrors]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;
    
    await login(values);
    console.log("로그인 성공👍 :",values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="이메일을 입력해주세요"
          required
          autoComplete="email"
        />
        {touched.email && errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="비밀번호를 입력해주세요"
          required
          autoComplete="password"
        />
         {touched.password && errors.password && <p className="error">{errors.password}</p>}
      </div>
      
      {/* TODO: 에러 타입에 따라 처리(ex: ErrorMessage 컴포넌트, 토스트 알림...) */}
      {loginError && <p className="error">{loginError}</p>}
      <button type="submit">{loading?"로그인 중":"로그인"}</button>
    </form>
  )
  // TODO: <div><label><input/> 컴포넌트 분리
  // TODO: 로그인 정보 기억하기 체크박스
  // TODO: 비밀번호 찾기, 회원가입 버튼 추가
}

export default LoginForm
