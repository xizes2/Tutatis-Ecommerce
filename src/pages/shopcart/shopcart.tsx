import React, { useContext } from "react";
import {
  IShopCartContext,
  ShopCartContext,
} from "../../../context/ShopCartContext";

function ShopCart() {
  const { shopCart } = useContext(ShopCartContext) as IShopCartContext;

  return (
    <div>
      ShopCart
      <div>
        {shopCart.map((productOnShopCart) => (
          <div key={productOnShopCart.productId}>
            {productOnShopCart.productId}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCart;
