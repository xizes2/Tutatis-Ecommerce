import ProductDetails from "@/pages/product/[slug]";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { ProductDetailsProps } from "../components/Product";

interface ShopCart {
  productId: string;
  productQuantity: number;
}

function useTutatisEcommerce() {
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  const [shopCart, setShopCart] = useState(Array<ShopCart>);

  function increasePurchaseQuantity() {
    setPurchaseQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  }

  function decreasePurchaseQuantity() {
    setPurchaseQuantity((prevQuantity) => {
      if (prevQuantity <= 1) {
        return prevQuantity;
      }
      return prevQuantity - 1;
    });
  }

  function addProductToCart(productId: string, productQuantity: number) {
    const addedProduct = {
      productId: productId,
      productQuantity: productQuantity,
    };

    const isProductOnShopCart = shopCart.some(
      (productInCart) => productInCart.productId === addedProduct.productId
    );

    if (!isProductOnShopCart) {
      setShopCart([...shopCart, addedProduct]);
      toast.success("Producto agregado al carrito!");
    } else {
      const updatedCart = shopCart.map((productInCart) => {
        if (productInCart.productId === addedProduct.productId) {
          return {
            ...productInCart,
            productQuantity:
              productInCart.productQuantity + addedProduct.productQuantity,
          };
        } else {
          return productInCart;
        }
      });
      setShopCart(updatedCart);
      toast.success("Cantidad del producto actualizada!");
    }
  }

  return {
    purchaseQuantity,
    shopCart,
    setPurchaseQuantity,
    increasePurchaseQuantity,
    decreasePurchaseQuantity,
    addProductToCart,
  };
}

export default useTutatisEcommerce;
