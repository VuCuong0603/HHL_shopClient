import { useEffect, useState } from "react";
import ProductsCarousel from "./carousel";
import { getproductAPI } from "utils/data/products";

const ProductsFeatured = () => {
  const [data, setData] = useState([]);
  const getproductapi = async () => {
    try {
      const res = await getproductAPI();
      setData(res.result.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproductapi();
  }, []);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Các sản phẩm dành cho bạn</h3>
          <a href="/products" className="btn btn--rounded btn--border">
            Mua ngay
          </a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  );
};

export default ProductsFeatured;
