import { client } from "../../index";

export const loginAPI = (username: string, password: string) => {
  return client
    .post("/auth/login", { username, password })
    .then((res) => res.data);
};
