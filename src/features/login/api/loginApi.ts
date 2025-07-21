import axios from 'axios';
import { LOGIN_API } from '../../../shared/config'
import type { LoginParams, LoginResponse } from '../types';

export const loginApi = async (params: LoginParams): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(LOGIN_API, params)

    const { token, user } = response.data;

    if (!token || !user) {
      throw new Error('토큰 또는 사용자 정보가 누락되었습니다.')
    }

    return { token, user }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || '로그인에 실패하였습니다.';
      throw new Error(message);
    }

    throw new Error('알 수 없는 에러가 발생했습니다.');
  }
};