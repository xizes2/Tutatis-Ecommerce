import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroBanner() {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <Image src="" alt="product image" className="hero-banner-image" />
        <div>
          <Link href={"/product/ID"}>
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
