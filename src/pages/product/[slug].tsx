import Image from "next/image";
import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product, { ProductProps } from "../../../components/Product";
import { client, urlFor } from "../../../lib/client";

interface ProductDetailsProps {
  productDetail: ProductProps;
  products: Array<ProductProps>;
}

function ProductDetails({ productDetail, products }: ProductDetailsProps) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(productDetail.image[index].asset._ref).url()}
              alt={productDetail.description}
              width={450}
              height={450}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {productDetail.image.map((item, indx) => (
              <Image
                key={indx}
                src={urlFor(item.asset._ref).url()}
                alt={""}
                width={100}
                height={100}
                onMouseEnter={() => setIndex(indx)}
                className={
                  indx === index ? "small-image selected-image" : "small-image"
                }
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{productDetail.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{productDetail.description}</p>
          <p className="price">${productDetail.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>Puede que te interese también</h2>
        <div className="marquee">
          <div
            className="maylike-products-container track"
            onClick={() => setIndex(0)}
          >
            {products.map((product) => (
              <Product key={product._id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const productsQuery = "*[_type == 'product']{slug {current}}";
  const products = await client.fetch(productsQuery);

  const paths = products.map((product: ProductProps) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

interface GetStaticPropsProps {
  params: { slug: string };
}

export async function getStaticProps({
  params: { slug },
}: GetStaticPropsProps) {
  const productDetailQuery = `*[_type == 'product' && slug.current == '${slug}'][0]`;
  const productsQuery = "*[_type == 'product']";

  const productDetail = await client.fetch(productDetailQuery);
  const products = await client.fetch(productsQuery);

  return { props: { productDetail, products } };
}

export default ProductDetails;