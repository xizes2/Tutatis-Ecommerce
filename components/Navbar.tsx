import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { IShopCartContext, ShopCartContext } from "../context/ShopCartContext";
import ShopCart from "./ShopCart";

function Navbar() {
  const { shopCart, isCartShown, setIsCartShown } = useContext(
    ShopCartContext
  ) as IShopCartContext;

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Página principal</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => {
          setIsCartShown(true);
        }}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{shopCart.length}</span>
      </button>
      {isCartShown && <ShopCart />}
    </div>
  );
}

export default Navbar;
