import React, { useContext, useRef } from "react";
import { IShopCartContext, ShopCartContext } from "../context/ShopCartContext";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

function ShopCart() {
  const shopCartRef = useRef();
  const { shopCart, setIsCartShown } = useContext(
    ShopCartContext
  ) as IShopCartContext;

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => {
            setIsCartShown(false);
          }}
        >
          <AiOutlineLeft />
          <span className="heading">Su Carrito</span>
          <span className="cart-num-items">({shopCart.length} artículos)</span>
        </button>
        {shopCart.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Su carrito está vacío</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => {
                  setIsCartShown(false);
                }}
                className="btn"
              >
                Contnuar comprando
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {shopCart.length >= 1 &&
            shopCart.map((product) => (
              <div className="product" key={product.productId}>
                <Image
                  alt={product.productId}
                  src={urlFor(product.productImage).url()}
                  width={180}
                  height={180}
                ></Image>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
