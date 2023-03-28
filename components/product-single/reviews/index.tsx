type ReviewsProductType = {
  show: boolean;
};
const data = [
  {
    id: "1",
    title:
      "Vải mát ghê luôn á trời, mặc áo này mà vào mùa hè thì khỏi nói, cứ như là đang ở mùa đông luôn Dịch vụ chăm sóc khách hàng ở shop này rất tốt luôn mọi người ạ, sản phẩm lại còn ổn áp nữa chứ Sản phẩm ở đây theo mình thấy thì vô cùng là chất lượng và ổn áp với giá tiền như vậy Mình là người khá kỹ tính trong việc mua hàng, mà shop này lại làm mình vui vẻ khi mua hàng thì là một thành công lớn của shop này rồi đấyKhông phải tự dưng mà tuy khen shop này đâu nhé. Đồ gì đâu mà vừa chất lượng lại vừa có giá vô cùng rẻ nữa chứ.Lần đầu tiên mua hàng online nên là hơi lo lo, cứ sợ bị lừa. Nhưng đỡ cái là shop này hỗ trợ cho mình rất tận tình luôn nên cũng yên tâm được phần nào",
  },
  {
    id: "2",
    title:
      " Mua trúng đợt shop ưu đãi giảm giá, vải chất lượng đã vậy còn được giảm giá nữa chứ, thích quá thích",
  },
  {
    id: "3",
    title:
      " Sản phẩm tốt, ổn áp trong tầm giá như vậy, mình đã mua ở rất nhiều nơi rồi mà không nơi nào làm mình hài lòng như nơi này cả.Sản phẩm trên cả tuyệt vời luôn ạ, mình mua đến nay đã là 10 sản phẩm ở shop này để cho họ hàng mình dùng rồi nó vô cùng bền lắm luôn",
  },
];
const Reviews = ({ show }: ReviewsProductType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__reviews">
      {data.map((i) => (
        <span
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {i.title}
        </span>
      ))}
    </section>
  );
};

export default Reviews;
