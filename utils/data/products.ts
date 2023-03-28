import { client } from "../index";
export const getproductAPI = () => {
  return client.get("/products").then((res) => res.data);
};
export const getproductIdApi = (id: string) => {
  return client.get(`/products/${id}`).then((res) => res.data);
};
