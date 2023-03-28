import { client } from "../../index";

export const getnewIdApi = (id) => {
  return client.get(`/blogs/${id}`).then((res) => res.data);
};
