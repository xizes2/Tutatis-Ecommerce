import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/client";
import { IHeroBannerProps } from "./HeroBanner";

function FooterBanner({
  footerBannerText,
  imageFooterBanner,
}: IHeroBannerProps) {
  return (
    <div>
      <form action="submit">
        <div className="footer-banner-container flex flex-col items-center">
          <Image
            src={urlFor(imageFooterBanner.asset._ref).url()}
            alt="dog and veterinarian"
            width={200}
            height={200}
            className="h-1/2 w-full object-cover"
          />
          <div className="banner-desc flex-grow flex-col gap-3 px-5">
            <span className="text-center font-bold leading-6">
              {footerBannerText}
            </span>
            <input type="text" className="p-2" placeholder="E-mail" required />
            <button type="button" className="self-center">
              ¡Únete!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FooterBanner;
