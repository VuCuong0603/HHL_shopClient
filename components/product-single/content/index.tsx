import React, { useState } from "react";
import CheckboxColorProduct from "../../products-filter/checkbox-color";

import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { addProduct } from "store/reducers/cart";
import { toggleFavProduct } from "store/reducers/user";
import { ProductType, ProductStoreType } from "types";
import { RootState } from "store";
import { toast } from "react-toastify";

type ProductContent = {
  product: any;
};

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [itemSize, setItemSize] = useState<string>("");

  const onColorSet = (e: string) => {
    console.log("e", e);

    setColor(e);
  };
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(
    favProducts,
    (productId) => productId === product._id
  );

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id: product._id,
      })
    );
  };

  const addToCart = () => {
    if (product.amount === 0) {
      toast.warning("Sản phẩm đã hết hàng , vui  lòng chọn sản phẩm khác");
    } else {
      if (color === "") {
        toast.warning("bạn cần phải chọn màu cho áo ");
      } else {
        if (itemSize === "") {
          toast.warning("bạn cần phải chọn size cho áo ");
        } else {
          if (color === "" && itemSize === "") {
            toast.warning("bạn cần phải chọn màu  và size cho áo ");
          } else {
            const productToSave: ProductStoreType = {
              id: product._id,
              name: product.name,
              thumb: product.image.url,
              price: product.price,
              count: count,
              color: color,
              size: itemSize,
            };

            const productStore = {
              count,
              product: productToSave,
            };

            dispatch(addProduct(productStore));
            toast.success(
              "bạn đã mua thành công" +
                `${count}` +
                "sản phẩm" +
                `${product.name}`
            );
          }
        }
      }
    }
  };

  const data = product.quantity
    ?.filter(
      (value: any, index: number, self: any) =>
        index === self.findIndex((t: any) => t.color === value.color)
    )
    .map((e: any) => {
      return { label: e.color, color: e.color };
    });
  console.log("data", data);

  const dataSize = React.useMemo(
    () => product.quantity?.filter((value: any) => value.color.includes(color)),

    [color]
  );

  const checkeSize = dataSize
    ?.filter((i: any) => i.color === color)
    .map((i: any) => i.size);

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <span className="product-on-sale">Sale</span>
        <h4 className="product__name">{product.name}</h4>
        <div className="product__prices">
          <h4> giá tiền :{product.price?.toLocaleString()}₫</h4>
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {data?.map((type: any) => (
              <CheckboxColorProduct
                key={type.id}
                type={"radio"}
                name="product-color"
                color={type.color}
                valueName={type.label}
                onChange={onColorSet}
              />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Chọn size</option>
                {checkeSize?.map((i: any) => (
                  <option value={i}>{i}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Số lượng: {product?.amount} </h5>
          {product?.amount == 0 ? (
            <h1 style={{ paddingTop: "5px", paddingBottom: "20px" }}>
              sản phẩm hết hàng
            </h1>
          ) : (
            ""
          )}
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              onClick={() => addToCart()}
              className="btn btn--rounded btn--yellow"
            >
              Mua sản phẩm
            </button>
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
            >
              <i className="icon-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
