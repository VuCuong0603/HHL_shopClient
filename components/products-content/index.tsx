import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getproductAPI } from "utils/data/products";
import List from "./list";

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);

  const router = useRouter();
  const [data, setData] = useState<any[]>([]);

  const { type: typeParam, size: sizeParam } = router.query;

  const filterSearch = (products: any, type: any, size: any) => {
    let arr = [];
    if (type) {
      console.log("222");
      arr = products.filter((item: any) => item.categoryId === type);
    } else {
      arr = [...products];
    }
    if (size) {
      arr = arr.filter((item: any) =>
        item.quantity.some((i: any) => i.size === size)
      );
    }
    setData(arr);
  };

  const getData = async (type: any, size: any) => {
    const res = await getproductAPI();
    if (res) {
      if (type || size) {
        filterSearch(res.result.products, type, size);
      } else {
        setData(res.result.products);
      }
    }
  };

  useEffect(() => {
    getData(typeParam, sizeParam);
  }, [typeParam, sizeParam]);

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>
          Men's Tops <span>({data.length})</span>
        </h2>
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters"></i>
        </button>
        <form
          className={`products-content__filter ${
            orderProductsOpen ? "products-order-open" : ""
          }`}
        >
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List data={data} />
    </section>
  );
};

export default ProductsContent;
