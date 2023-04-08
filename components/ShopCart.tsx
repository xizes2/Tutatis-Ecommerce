import React, { useContext, useEffect, useState } from "react";
import { IShopCartContext, ShopCartContext } from "../context/ShopCartContext";
import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

function ShopCart() {
  const [totalShopCartPrice, setTotalShopCartPrice] = useState(0);

  const {
    shopCart,
    setIsCartShown,
    decreaseProductQuantityOnCart,
    increaseProductQuantityOnCart,
    deleteProductFromCart,
  } = useContext(ShopCartContext) as IShopCartContext;

  useEffect(() => {
    setTotalShopCartPrice(
      shopCart
        .map((product) => {
          return product.totalPrice;
        })
        .reduce((prevTotal, currentTotal) => {
          return prevTotal + currentTotal;
        }, 0)
    );
  }, [shopCart]);

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
                Continuar comprando
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {shopCart.length >= 1 &&
            shopCart.map((product) => (
              <div className="product" key={product.productId}>
                <Image
                  className="cart-product-image"
                  alt={product.productId}
                  src={urlFor(product.productImage).url()}
                  width={150}
                  height={150}
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{product.productName}</h5>
                    <h4>€{product.productPrice}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            decreaseProductQuantityOnCart(product.productId)
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{product.productQuantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            increaseProductQuantityOnCart(product.productId)
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() =>
                        deleteProductFromCart(shopCart, product.productId)
                      }
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                  <div className="flex top">
                    <h4>Subtotal del producto:</h4>
                    <h4>€{product.totalPrice}</h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {shopCart.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>€ {totalShopCartPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn">
                Pagar con Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopCart;
