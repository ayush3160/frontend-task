import axios from "axios"

const BASE_URL = "http://localhost:8000";


export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LoginResponseData = {
  name: string;
  email: string
}

export async function loginUser(userData : LoginRequestBody){
  const res = await axios.post(`${BASE_URL}/login`,userData);

  return res.data;
}