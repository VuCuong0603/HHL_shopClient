import Layout from "../../layouts/Main";
import { useSelector } from "react-redux";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import { RootState } from "store";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { OrderProductApi } from "../../utils/data/order/order";
import { useForm } from "react-hook-form";

const CheckoutPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  });
  const { user } = useSelector((state: RootState) => state.user);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  console.log("cartItems", cartItems);
  const products = cartItems.map((i: any) => {
    return {
      _id: i.id,
      amount: i.count,
      color: i.color,
      size: i.size,
    };
  });
  const userId = user?._id;
  const thanhtoans = async (data: any) => {
    if (priceTotal === 0) {
      toast.error("Giỏ hàng chưa có sản phẩm vui lòng chọn mua sản phẩm");
    } else if (userId === undefined) {
      toast.error("Bạn cần đăng nhập để thanh toán");
    } else {
      try {
        const res = await OrderProductApi(
          data.name,
          userId,
          data.address,
          data.phone,
          products
        );
        toast.success("Bạn đã thanh toán thành công");
      } catch (error: any) {
        toast.warning(error);
      }
    }
  };

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">
              Đặt hàng online hoặc thanh toán trực tuyến
            </h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button
                  className="btn btn--rounded btn--yellow"
                  onClick={() =>
                    router.push({
                      pathname: "/login",
                      query: { name: "total" },
                    })
                  }
                >
                  Đăngnhập
                </button>
                <button
                  className="btn btn--rounded btn--border"
                  onClick={() => router.push("/register")}
                >
                  Đăng ký
                </button>
              </div>

              <div className="block">
                <h3 className="block__title">thông tin vận chuyển</h3>
                <form className="form" onSubmit={handleSubmit(thanhtoans)}>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Họ và tên"
                        name="name"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.name && errors.name.type === "required" && (
                        <p className="message message--error">
                          Họ và tên không được bỏ trống
                        </p>
                      )}
                    </div>

                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="number"
                        placeholder="Số điện thoại"
                        name="phone"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.phone && errors.phone.type === "required" && (
                        <p className="message message--error">
                          Số điện thoại không được bỏ trống
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <textarea
                        className="form__inputTextara form__inputTextara--sm"
                        placeholder="địa chỉ"
                        name="address"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.address && errors.address.type === "required" && (
                        <p className="message message--error">
                          Địa chỉ không được bỏ trống
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn--rounded btn--yellow"
                  >
                    Tiến hành thanh toán
                  </button>
                </form>
              </div>
            </div>

            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Phương thức thanh toán</h3>
                <ul className="round-options round-options--three">
                  <li className="round-item">
                    <button
                      onClick={() => router.push("/vietcombank")}
                      className="round-item __buttonbank"
                    >
                      <img src="/images/logos/Vietcombank.jpg" alt="Paypal" />
                    </button>
                  </li>
                  <li className="round-item">
                    <button
                      className="round-item __buttonbank"
                      onClick={() => router.push("/Vietinbank")}
                    >
                      <img src="/images/logos/vietinbank.png" alt="Paypal" />
                    </button>
                  </li>
                </ul>
              </div>

              {/* <div className="block">
                <h3 className="block__title">Phương thức vận chuyển</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/viettelpost.png" alt="Paypal" />
                    <p>30.000đ</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/Bưuđiện.png" alt="Paypal" />
                    <p>35.000đ</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/grap.png" alt="Paypal" />
                    <p>40.000đ</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/Be.png" alt="Paypal" />
                    <p>40.000đ</p>
                  </li>
                </ul>
              </div> */}
            </div>

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
          </div>

          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back">
              <i className="icon-left"></i> Trở lại
            </a>
            <div className="cart-actions__items-wrapper">
              <button
                type="button"
                className="btn btn--rounded btn--border"
                onClick={() => router.push("/products")}
              >
                Trở lại cửa hàng
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
