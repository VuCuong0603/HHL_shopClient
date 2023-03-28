import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>HHL</span>-Shop
            </h6>
            <p>
              HHL cửa hàng thời trang ,không chỉ mang lại vẻ đẹp mà còn mang đến
              sự thoải mái cho cho bạn , chúng tôi luôn có gắng lại lại sự ưng ý
              nhất vì thật đơn giản "Vẻ đẹp tạo lên thương hiệu "
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>HỆ THỐNG CỬA HÀNG</li>
              <li>
                <a href="#">27 Chùa Bộc, Đống Đa, HN</a>
              </li>
              <li>
                <a href="#">242 Thái Hà, Đống Đa, HN</a>
              </li>
              <li>
                <a href="#">63 Đại Cổ Việt, Hai Bà Trưng, HN</a>
              </li>
              <li>
                <a href="#">20 Dương Quảng Hàm, Cầu Giấy, HN</a>
              </li>
              <li>
                <a href="#">11 Dương Quảng Hàm, Cầu Giấy, HN</a>
              </li>
            </ul>
            <ul>
              <li>CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</li>
              <li>
                <a href="#">Giới Thiệu</a>
              </li>
              <li>
                <a href="#">Chính Sách Đổi Hàng</a>
              </li>
              <li>
                <a href="#">Chính Sách Bảo Hành</a>
              </li>
              <li>
                <a href="#">Điều Khoản Dịch Vụ</a>
              </li>
              <li>
                <a href="#">Hướng Dẫn Mua Hàng</a>
              </li>
            </ul>
            <ul>
              <li>ĐỊA CHỈ</li>
              <li>
                VPGD: Đội 6, Xã Phương Đình, Huyện Đan Phượng, Thành phố Hà nội,
                Việt nam
              </li>
              <li>
                <a href="#">Emai:HHLadmin@gmail.com</a>
              </li>
              <li>
                <a href="#">Hotline:123456789</a>
              </li>
              <li>GPKD: 0107756568</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>COPYRIGHT BY HHL - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
