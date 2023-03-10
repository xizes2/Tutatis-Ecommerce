import React from "react";
import FooterBanner from "../../components/FooterBanner";
import HeroBanner from "../../components/HeroBanner";
import product from "../../sanity_tutatisecommerce/schemas/product";

function Home() {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Pienso Nature Diet</p>
      </div>
      <div className="products-container">
        {["product1", "product2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
}

export default Home;
