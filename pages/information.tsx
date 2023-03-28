import Footer from "components/footer";
import React from "react";
import Layout from "../layouts/Main";
import ShopInformation from "../components/shopinformation";

const Information = () => {
  return (
    <Layout>
      <ShopInformation />
      <Footer />
    </Layout>
  );
};

export default Information;
