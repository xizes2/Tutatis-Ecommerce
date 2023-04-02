import React from "react";
import { client } from "../../lib/client";
import FooterBanner from "../../components/FooterBanner";
import HeroBanner, { IHeroBannerProps } from "../../components/HeroBanner";
import Product, { IProductDetailsProps } from "../../components/Product";

interface IHomeProps {
  products: Array<IProductDetailsProps>;
  bannerData: Array<IHeroBannerProps>;
}

function Home({ products, bannerData }: IHomeProps) {
  return (
    <>
      <HeroBanner {...bannerData[0]} />
      <div className="products-heading">
        <h2>Productos más vendidos</h2>
      </div>
      <div className="products-container">
        {products.map((product: IProductDetailsProps) => (
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
