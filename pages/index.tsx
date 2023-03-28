import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Hàng mới về</h3>
              <a
                href="/products?type=63bd05ee20f9112e34a17a52"
                className="btn btn--rounded"
              >
                Mua ngay
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Áo len</h3>
              <a
                href="/products?type=63b6f489efe8f34080e9d874"
                className="btn btn--rounded"
              >
                Mua ngay
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Hàng nhiều người mua nhất</h3>
              <a
                href="/products?type=63b6f3dfefe8f34080e9a5ab"
                className="btn btn--rounded"
              >
                Mua ngay
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Tại sao bạn lên mua hàng tại shop HHL ?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Giao hàng miễn phí</h4>
                <p>
                  Tất cả các đơn hàng , hóa đơn có giá trị hơn 1tr đều được miễn
                  phí giao hàng
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Quy trình thanh toán dễ dàng</h4>
                <p>
                  Tất cả các khoản thanh toán được xử lý ngay lập tức , chúng
                  tôi luôn mang lại sự hài lòng nhất đối với khách hàng.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Đảm bảo quyền lợi khách hàng</h4>
                <p>
                  Hoàn trả lại tiền nếu như sản phẩm không đúng mẫu , như quảng
                  cáo
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Chất liệu</h4>
                <p>
                  Được sản xuất 100% cotton: thấm hút mồ hôi tốt, thông thoáng,
                  chống mài mòn,độ bền cao đó là lý do người dùng luôn tin tưởng
                  và ủng hộ mọi sản phẩm của shop HHL
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
