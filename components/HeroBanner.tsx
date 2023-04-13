import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

export interface IHeroBannerProps {
  buttonText: string;
  description: string;
  discount: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
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
  slug,
}: IHeroBannerProps) {
  return (
    <div className="hero-banner-container flex">
      <div className="flex flex-wrap-reverse gap-10 text-center justify-center">
        <div>
          <p className="banner-product-name">{product}</p>
          <h3>{midText}</h3>
          <div>
            <Link href={`/product/${slug.current}`}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
        </div>
        <div className="flex items-center flex-col gap-2">
          <Image
            src={urlFor(image.asset._ref).url()}
            alt={product}
            width={200}
            height={200}
            priority={true}
          />
          <p className="text-yellowTuta">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
