import { useEffect, useState } from "react";
import Checkbox from "./form-builder/checkbox";
import CheckboxColor from "./form-builder/checkbox-color";
import Slider from "rc-slider";

// data
import { getcategoryAPI } from "./../../utils/data/products-types";
import productsColors from "./../../utils/data/products-colors";
import productsSizes from "./../../utils/data/products-sizes";
import { useRouter } from "next/router";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [productsTypes, setProductsTypes] = useState<any>([]);

  const router = useRouter();

  const { type: typeParam, size: sizeParam, color: colorParam } = router.query;

  const productsType = async () => {
    try {
      const res = await getcategoryAPI();
      console.log(res);
      setProductsTypes(res.result.categories);
    } catch (error) {
      console.log(error);
    }
  };
  const addQueryParams = () => {};
  useEffect(() => {
    productsType();
  }, []);

  const changeTypeProduct = (type: any) => {
    const newQuery = sizeParam
      ? { type: type._id, size: sizeParam }
      : { type: type._id };

    router.push(
      {
        pathname: "/products/",
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  const changeSizeProduct = (type: any) => {
    console.log("type..", type);
    const newQuery = typeParam
      ? { type: typeParam, size: type }
      : { size: type };
    router.push(
      {
        pathname: "/products/",
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };
  const changeColorProduct = (type: any) => {
    console.log("type..", type);
    const newQuery = colorParam
      ? { type: colorParam, color: type }
      : { color: type };
    router.push(
      {
        pathname: "/products/",
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${
          filtersOpen ? "products-filter__menu-btn--active" : ""
        }`}
      >
        Tìm kiếm nâng cao <i className="icon-down-open"></i>
      </button>

      <div
        className={`products-filter__wrapper ${
          filtersOpen ? "products-filter__wrapper--open" : ""
        }`}
      >
        <div className="products-filter__block">
          <button type="button">Loại sản phẩm</button>
          <div className="products-filter__block__content">
            {productsTypes?.map((type: any) => (
              <Checkbox
                key={type.id}
                name="product-type"
                label={type.name}
                type={type}
                changeParam={changeTypeProduct}
              />
            ))}
          </div>
        </div>
        <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map((type) => (
              <Checkbox
                type="square"
                key={type.id}
                name="product-size"
                label={type.label}
                changeParam={changeSizeProduct}
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Các Loại Màu</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map((type) => (
                <CheckboxColor
                  key={type.id}
                  valueName={type.color}
                  name="product-color"
                  color={type.color}
                  changeParam={changeColorProduct}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-submit btn--rounded btn--yellow"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

export default ProductsFilter;
