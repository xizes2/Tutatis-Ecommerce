import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import { IHeroBannerProps } from "./HeroBanner";

function FooterBanner({
  discount,
  largeText1,
  largeText2,
  saleTime,
  smallText,
  midText,
  description,
  product,
  buttonText,
  image,
}: IHeroBannerProps) {
  return (
    <div>
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
          <div className="right">
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{description}</p>
            <Link href={`/product/${product}`}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
          <Image
            src={urlFor(image && image.asset._ref).url()}
            alt={description}
            width={250}
            height={250}
            className="footer-banner-image"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
