import { client } from "../../index";

export const RegisterAPI = (
  username: string,
  email: string,
  password: string,
  phoneNumber: string
) => {
  return client
    .post("/auth/register", { username, email, password, phoneNumber })
    .then((res) => res.data);
};
