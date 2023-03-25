import Image from "next/image";
import React from "react";
import { ProductProps } from "../../../components/Product";
import { client, urlFor } from "../../../lib/client";

interface ProductDetailsProps {
  productDetail: ProductProps;
  products: Array<ProductProps>;
}

function ProductDetails({ productDetail, products }: ProductDetailsProps) {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(productDetail.image[0].asset._ref).url()}
              alt={productDetail.description}
              width={250}
              height={250}
              className="product-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const productsQuery = "*[_type == 'product']";
  const products = await client.fetch(productsQuery);

  const paths = products.map((product: ProductProps) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: false,
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
