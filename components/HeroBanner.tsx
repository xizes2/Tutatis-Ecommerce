import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

export interface HeroBannerProps {
  buttonText: string;
  description: string;
  discount: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

function HeroBanner({
  product,
  midText,
  image,
  buttonText,
  description,
}: HeroBannerProps) {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="banner-product-name">{product}</p>
        <h3>{midText}</h3>
        <Image
          src={urlFor(image.asset._ref).url()}
          alt={product}
          className="hero-banner-image"
          width={200}
          height={200}
          priority={true}
        />
        <div>
          <Link href={"/product/ID"}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
