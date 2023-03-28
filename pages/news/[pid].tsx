import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Main";
import Image from "next/image";
import Footer from "components/footer";
import { useRouter } from "next/router";
import { getNewsIdApi } from "utils/data/news";
const New = () => {
  const [news, setNew] = useState<any>([]);
  const [img, setImg] = useState<string>("");
  const router = useRouter();
  const id = router.query.pid;
  const getnewId = async () => {
    try {
      const res = await getNewsIdApi(id as string);
      const a = res.blog;
      const b = res.blog.image.url;
      setImg(b);
      setNew(a);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getnewId();
  }, [id]);
  return (
    <Layout>
      <div className="container">
        <div className="New_title">
          <h1 className="New_title__text">{news.title}</h1>
        </div>

        <div className="Image_New">
          <img
            src={img}
            alt="HHL_Shop thời trang trẻ"
            className="Image_New__url"
          />
        </div>
        <div className="New_detail">
          <p className="New_detail__new">{news.detail}</p>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default New;
