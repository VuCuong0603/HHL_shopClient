import Image from "next/image";
import React from "react";
const ShopInformation = () => {
  return (
    <div className="container">
      <div>
        <h1
          style={{
            fontSize: "20px",
            paddingTop: "40px",
            paddingBottom: "25px",
          }}
        >
          Về thương hiệu thời trang nam HHL
        </h1>
        <br />
        <p style={{ fontSize: "16px", lineHeight: "2.5em" }}>
          Ra đời từ 2014, thương hiệu thời trang nam HHL xác định sứ mệnh giúp
          các chàng trai trở nên đẹp hơn với phiên bản của chính mình. Ngày nay
          nam giới trẻ đang đứng những cơ hội tuyệt vời của xã hội hiện đại,
          công nghệ thông tin phát triển, cuộc cách mạng của các trang mạng xã
          hội để khẳng định bản thân. Bên cạnh đó, HHL hiểu rằng người trẻ cũng
          đang phải đối diện với những áp lực, thử thách thôi thúc bản thân phải
          thể hiên mình so với những người khác. Với mong muốn được đồng hành,
          truyền cảm hứng và khuyến khích các bạn nam giới trẻ dám bước ra khỏi
          vùng an toàn để tự do, tự tin thể hiện chính mình theo phong cách phù
          hợp với bản thân. Thương hiệu thời trang HHL đầu tư tâm huyết nghiên
          cứu thiết kế chi tiết từng sản phẩm để có thể mang lại những trải
          nghiệm mới cho khách hàng, cũng là thông điệp muốn nhắn nhủ đến các
          bạn trẻ hãy cho bản thân trải nghiệm, dám thay đổi, bứt phá để vươn
          lên. Chúng ta chỉ thực sự thay đổi khi chúng ta hành động. HHL tin
          rằng dù có thể thành công hay thất bại, nhưng chắc chắn chỉ có những
          trải nghiệm mới giúp bạn trưởng thành. Trưởng thành là một hành trình
          với những dấu mốc thanh xuân, để khi nhìn lại tôi và bạn có thể tự tin
          không phải nuối tiếc “giá như…” Mỗi bạn trẻ là một phiên bản độc đáo
          và duy nhất.
        </p>

        <div style={{ padding: "15px 0 15px 0" }}>
          <h5 style={{ fontSize: "20px" }}>HHL Be yourself</h5>
        </div>
      </div>

      <a style={{ fontSize: "16px" }}>Một vài hình ảnh về công ty chúng tôi </a>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 0 50px 0",
        }}
      >
        {" "}
        <Image
          src="/img/Logo1.png"
          alt="Picture of the author"
          style={{ borderRadius: "10px" }}
          width={300}
          height={300}
        />
      </div>
      <a
        style={{ display: "flex", justifyContent: "center", fontSize: "16px" }}
      >
        Logo mang tính biểu tượng của công ty
      </a>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "50px 0 50px 0",
        }}
      >
        <Image
          src="/img/Logo2.png"
          alt="Picture of the author"
          style={{ borderRadius: "10px" }}
          width={400}
          height={400}
        />
        <Image
          src="/img/Logo3.png"
          alt="Picture of the author"
          style={{ borderRadius: "10px" }}
          width={400}
          height={400}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px",
          justifyContent: "space-around",
          padding: "50px 0 50px 0",
        }}
      >
        <Image
          src="/img/Logo4.png"
          alt="Picture of the author"
          style={{
            borderRadius: "10px",
          }}
          width={300}
          height={300}
        />
        <Image
          src="/img/Logo5.png"
          alt="Picture of the author"
          style={{ borderRadius: "10px" }}
          width={470}
          height={470}
        />
      </div>
    </div>
  );
};

export default ShopInformation;
