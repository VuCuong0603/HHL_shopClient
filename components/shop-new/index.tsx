import React, { useEffect, useState } from "react";
import News from "../shop-new/item";
import { getNewsAPI } from "../../utils/data/news";
const ShopNew = () => {
  const [data, setData] = useState<any>([]);

  const getblog = async () => {
    try {
      const res = await getNewsAPI();

      setData(res.result.blogs);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("data", data);

  useEffect(() => {
    getblog();
  }, []);
  return (
    <div className="container">
      <h1>Tin tức nổi bật nhất:</h1>
      {data?.map((i: any) => (
        <News
          id={i._id}
          title={i.title}
          image={i.image?.url}
          detail={i.detail}
        />
      ))}
    </div>
  );
};

export default ShopNew;
