import { client } from "../../index";

export const forgotPaswordApi = (email: string) => {
  return client.post("", { email }).then((res) => res.data);
};
