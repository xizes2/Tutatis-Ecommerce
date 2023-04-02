import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Image from "next/image";

export interface IProductDetailsProps {
  description: string;
  image: Array<{
    asset: {
      _ref: string;
    };
  }>;
  name: string;
  price: number;
  slug: {
    current: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

function Product({
  description,
  image,
  name,
  price,
  slug,
}: IProductDetailsProps) {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <p className="product-name">{name}</p>
          <p className="product-price">€{price}</p>
          <Image
            src={urlFor(image && image[0].asset._ref).url()}
            alt={description}
            width={250}
            height={250}
            className="product-image"
          />
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
