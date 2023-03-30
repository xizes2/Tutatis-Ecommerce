import React from "react";
import { client } from "../../lib/client";
import FooterBanner from "../../components/FooterBanner";
import HeroBanner, { HeroBannerProps } from "../../components/HeroBanner";
import Product, { ProductDetailsProps } from "../../components/Product";

interface HomeProps {
  products: Array<ProductDetailsProps>;
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
        {products.map((product: ProductDetailsProps) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
      <FooterBanner {...bannerData[0]} />
    </>
  );
}

export async function getServerSideProps() {
  const productsQuery = "*[_type == 'product']";
  const products = await client.fetch(productsQuery);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
}

export default Home;
