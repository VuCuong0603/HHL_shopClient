import { client } from "../index";

export const getcategoryAPI = () => {
  return client.get("/categories").then((res) => res.data);
};
