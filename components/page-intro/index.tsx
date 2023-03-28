import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Chương trình sale chào xuân 2023</h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right"></i>Mua ngay
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Thay đổi cá tính biến đổi phong cách , may mắn cả năm</h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right"></i>Mua ngay
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Miễn phí vận chuyển</h4>
                <p>Đơn hàng trên 1tr</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% khách hàng hài lòng</h4>
                <p>Phản hồi của quý khách giúp chúng tôi hoàn thiện hơn</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Chính sách bảo hành</h4>
                <p>
                  Bảo hành 30 ngày cho mỗi sản phẩm từ cửa hàng của chúng tôi
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
