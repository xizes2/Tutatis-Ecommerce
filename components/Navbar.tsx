import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Nature Diet</Link>
      </p>
      <Link href={`/shopcart/shopcart`}>
        <button type="button" className="cart-icon" onClick={() => {}}>
          <AiOutlineShopping />
          <span className="cart-item-qty">1</span>
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
