import { client } from "../../index";

export const OrderProductApi = (
  customerName: string,
  customerId: string,
  address: string,
  phoneNumber: number,
  products: any
) => {
  return client
    .post("/orders", {
      customerName,
      customerId,
      phoneNumber,
      address,
      products,
    })
    .then((res) => res.data);
};
