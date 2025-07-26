import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "", // 실제 서버 주소로 바꿔야 합니다
  withCredentials: true,
});

export default axiosInstance;
