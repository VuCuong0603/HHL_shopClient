import { client } from "../index";
export const getNewsAPI = () => {
  return client.get("/blogs").then((res) => res.data);
};
export const getNewsIdApi = (id: string) => {
  return client.get(`/blogs/${id}`).then((res) => res.data);
};
