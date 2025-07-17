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