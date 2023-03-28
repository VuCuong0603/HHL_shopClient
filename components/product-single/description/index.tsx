type ProductDescriptionType = {
  show: boolean;
  detail: any;
};

const Description = ({ show, detail }: ProductDescriptionType) => {
  const style = {
    display: show ? "flex" : "none",
  };
  console.log("detail", detail);
  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>Thông tin chi tiết và mô tả sản phẩm</h4>
        <textarea
          value={detail}
          style={{ resize: "none", width: "300px ", height: "250px" }}
        />
      </div>
    </section>
  );
};

export default Description;
