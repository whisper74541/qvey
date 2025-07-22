// 서버에 보낼 요청 값
export interface LoginParams {
  email: string;
  password: string;
}

export interface User {
  user_id: string;
  user_email: string;
  user_name: string;
  user_profile_image?: string;
  user_birth?: string;
  user_gender?: "M" | "F";
  user_address?: string;
  user_address_detail?: string;
  user_stauts: "N" | "D" | "S" | "F";
  last_login_time?: string;
}

export interface LoginResponse{
  token: string;
  user: User;
}

// 폼 내부에서 사용하는 값
export interface LoginValues {
  email: string;
  password: string;
}

export type LoginErrors = Partial<LoginValues>
// 아래와 동일한 의미
// type LoginErrors = {
//   email?: string;
//   password?: string;
// };