import Layout from "../layouts/Main";
import Link from "next/link";
import { RegisterAPI } from "../utils/data/auth/registerApi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
type Register = {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
};
const RegisterPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const handleRegister = async (data: Register) => {
    try {
      const res = await RegisterAPI(
        data.username,
        data.email,
        data.password,
        data.phoneNumber
      );
      await toast.success("bạn đã đăng thành công");
      router.push("/login");
    } catch (error: any) {
      toast.warning(error.message);
    }
  };
  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a>
                <i className="icon-left"></i> Trở lại cửa hàng
              </a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Tạo tài khoản</h2>
            <p className="form-block__description">
              {" "}
              HHL cửa hàng thời trang ,không chỉ mang lại vẻ đẹp mà còn mang đến
              sự thoải mái cho cho bạn , chúng tôi luôn có gắng lại lại sự ưng ý
              nhất vì thật đơn giản "Vẻ đẹp tạo lên thương hiệu "
            </p>

            <form className="form" onSubmit={handleSubmit(handleRegister)}>
              <div className="form__input-row">
                <input
                  name="username"
                  className="form__input"
                  placeholder="Nhập tài khoản mà bạn muốn"
                  type="text"
                  ref={register({
                    required: true,
                    // pattern: /^\s*$/,
                  })}
                />
                {errors.username && errors.username.type === "required" && (
                  <p className="message message--error">
                    Tên tài khoản không được bỏ trống
                  </p>
                )}
                {/* {errors.username && errors.username.type === "pattern" && (
                  <p className="message message--error">
                    Tên tài khoản không được có khoảng trống
                  </p>
                )} */}
              </div>

              <div className="form__input-row">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Số điện thoại"
                  name="phoneNumber"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.phoneNumber &&
                  errors.phoneNumber.type === "required" && (
                    <p className="message message--error">
                      Số điện thoại không được bỏ trống
                    </p>
                  )}
              </div>

              <div className="form__input-row">
                <input
                  name="email"
                  className="form__input"
                  placeholder="Email"
                  type="text"
                  ref={register({
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    Email của bạn không được bỏ trống
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="message message--error">
                    Email của bạn không hợp lệ
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  name="password"
                  className="form__input"
                  type="Password"
                  placeholder="Mật khẩu"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Mật khẩu không được bỏ trống
                  </p>
                )}
              </div>

              {/* <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className={`checkbox checkbox--sm`}
                  >
                    <input
                      name="signed-in"
                      type="checkbox"
                      id="check-signed-in"
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>
                      Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật
                    </p>
                  </label>
                </div>
              </div> */}

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Đăng kí
              </button>

              <p className="form__signup-link">
                <Link href="/login">
                  <a href="#">Bạn đã là thành viên?</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterPage;
