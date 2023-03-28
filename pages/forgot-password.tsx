import Layout from "../layouts/Main";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { forgotPaswordApi } from "../utils/data/auth/forgotPasswordApi";
type ForgotMail = {
  email: string;
};

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: ForgotMail) => {
    try {
      const res = forgotPaswordApi(data.email);
      console.log(res);
    } catch (error) {
      console.log(error);
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
            <h2 className="form-block__title">Quên mật khẩu?</h2>
            <p className="form-block__description">
              Nhập email hoặc số điện thoại của bạn và khôi phục tài khoản của
              bạn
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email hoặc số điện thoại"
                  type="text"
                  name="email"
                  ref={register({
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    Email không được bỏ trống
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="message message--error">Email không hợp lệ</p>
                )}
              </div>

              {/* <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Mật khẩu không được bỏ trống
                  </p>
                )}
              </div> */}

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
