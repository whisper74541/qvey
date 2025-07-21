import { useState } from "react";
import { loginApi } from "../api"
import type { LoginParams, LoginResponse } from "../types";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponse | null>(null);

  const login = async (params: LoginParams) => {
    setLoading(true);
    setError(null);

    try {
      const result = await loginApi(params);
      setData(result);
      // TODO: 토큰 저장 로직
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  // TODO: 로그인 실패 후 상태 초기화를 위핸 reset 함수 추가 고려
  return { login, data, error, loading };
}
