import React from "react";
import { client } from "../../lib/client";
import FooterBanner from "../../components/FooterBanner";
import HeroBanner, { HeroBannerProps } from "../../components/HeroBanner";
import Product, { ProductProps } from "../../components/Product";

interface HomeProps {
  products: Array<ProductProps>;
  bannerData: Array<HeroBannerProps>;
}

function Home({ products, bannerData }: HomeProps) {
  return (
    <>
      <HeroBanner {...bannerData[0]} />
      <div className="products-heading">
        <h2>Productos más vendidos</h2>
      </div>
      <div className="products-container">
        {products.map((product: ProductProps) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
      <FooterBanner {...bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const productsQuery = "*[_type == 'product']";
  const products = await client.fetch(productsQuery);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
