import Layout from "../layouts/Main";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

import FacebookSign from "../components/auth/facebook";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "utils/data/auth/LoginApi";
import { toast } from "react-toastify";
import { SetUser } from "store/reducers/user";

type LoginMail = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const router = useRouter();

  const onSubmit = async (data: LoginMail) => {
    try {
      const res = await loginAPI(data.username, data.password);
      toast.success("bạn đã đăng nhập thành công");
      localStorage.setItem("accessToken", res.accessToken);

      dispatch(SetUser(res.user));
      if (router.query.name === "total") {
        router.back();
      } else {
        router.push("/products");
      }
    } catch (error: any) {
      toast.error(error.message);
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
            <h2 className="form-block__title">Đăng nhập</h2>
            <p className="form-block__description">
              HHL cửa hàng thời trang ,không chỉ mang lại vẻ đẹp mà còn mang đến
              sự thoải mái cho cho bạn , chúng tôi luôn có gắng lại lại sự ưng ý
              nhất vì thật đơn giản "Vẻ đẹp tạo lên thương hiệu "
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder=" Tài khoản"
                  type="text"
                  name="username"
                  ref={register({
                    required: true,
                  })}
                />

                {errors.username && errors.username.type === "required" && (
                  <p className="message message--error">
                    Tài khoản không được bỏ trống
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Mật khẩu"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Mật khẩu không được bỏ trống
                  </p>
                )}
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className={`checkbox checkbox--sm`}
                  >
                    <input
                      type="checkbox"
                      name="keepSigned"
                      id="check-signed-in"
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Lưu tài khoản</p>
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="form__info__forgot-password"
                >
                  Quên mật khẩu?
                </a>
              </div>
              {/* <FacebookSign /> */}
              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Đăng nhập
              </button>

              <p className="form__signup-link">
                Bạn chưa có tài khoản ?<a href="/register">Đăng ký</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
