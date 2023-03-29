import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <p>2023 FPN All rights reserved</p>
      <span className="icons">
        <Link href={"https://www.instagram.com/tutatisvet/"} target="_blank">
          <AiFillInstagram />
        </Link>
      </span>
    </div>
  );
}

export default Footer;
