import React from "react";
import { client } from "../../lib/client";
import FooterBanner from "../../components/FooterBanner";
import HeroBanner, { HeroBannerProps } from "../../components/HeroBanner";
import product from "../../sanity_tutatisecommerce/schemas/product";

interface HomeProps {
  products: [];
  productBannerData: Array<HeroBannerProps>;
}

function Home({ products, productBannerData }: HomeProps) {
  console.log(productBannerData);
  return (
    <>
      <HeroBanner productBanner={productBannerData[0].productBanner} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Pienso Nature Diet</p>
      </div>
      <div className="products-container">
        {products.map((product: any) => product.name)}
      </div>
      <FooterBanner />
    </>
  );
}

export const getServerSideProps = async () => {
  const productsQuery = "*[_type == 'product']";
  const products = await client.fetch(productsQuery);

  const bannerQuery = "*[_type == 'banner']";
  const bannerProduct = await client.fetch(bannerQuery);

  return {
    props: { products, bannerProduct },
  };
};

export default Home;
