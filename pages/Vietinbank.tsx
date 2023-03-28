import CheckoutItems from "components/checkout/items";
import Footer from "components/footer";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import Layout from "../layouts/Main";

const Vietinbank = () => {
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  });
  return (
    <Layout>
      <div className="container">
        <h1 style={{ paddingTop: "40px", paddingBottom: "35px" }}>
          Thanh toán thẻ Qr hoặc chuyển khoản trực tiếp
        </h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="/images/logos/Qrvietinbank.png"
            alt="vietcombankHHL"
            style={{ width: "308px", height: "301px" }}
          />
          <div style={{ paddingLeft: "200px" }}>
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Giỏ hàng của bạn</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Tổng tiền:</p>
                  <h3>{priceTotal.toLocaleString()}₫</h3>
                </div>
              </div>
            </div>
            <div>
              <p
                style={{ fontSize: "16px", lineHeight: "1.5", color: "black" }}
              >
                Số tài khoản :100869255452
              </p>
              <p
                style={{ fontSize: "16px", lineHeight: "1.5", color: "black" }}
              >
                Ngân hàng :Vietinbank
              </p>
              <p
                style={{ fontSize: "16px", lineHeight: "1.5", color: "black" }}
              >
                Chủ tài khoản :Vũ Mạnh Cường
              </p>
              <p
                style={{ fontSize: "16px", lineHeight: "1.5", color: "black" }}
              >
                Nội dung chuyển khoản ghi số loại áo cần mua và size , màu ,
                chúng tôi sẽ liên hệ bạn trong 5 phút sau khi bạn chuyển khoản
                để chốt đơn và gửi hàng cho quý khách
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Vietinbank;
