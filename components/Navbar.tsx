import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { IShopCartContext, ShopCartContext } from "../context/ShopCartContext";
import ShopCart from "./ShopCart";
import Image from "next/image";

function Navbar() {
  const { shopCart, isCartShown, setIsCartShown } = useContext(
    ShopCartContext
  ) as IShopCartContext;

  return (
    <div className="flex justify-between bg-white/80 p-6 backdrop-blur-sm">
      <p className="logo">
        <Link href={"/"}>
          <Image
            src={"/logot-tetatis-veterinario.png"}
            width={100}
            height={100}
            alt="logo de la empresa"
          />
        </Link>
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
