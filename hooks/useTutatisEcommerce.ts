import { useState } from "react";
import { toast } from "react-hot-toast";

function useTutatisEcommerce() {
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

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
      _id: productId,
      qty: productQuantity,
    };
    toast.success("Producto agregado al carrito!");
  }

  return {
    purchaseQuantity,
    setPurchaseQuantity,
    increasePurchaseQuantity,
    decreasePurchaseQuantity,
    addProductToCart,
  };
}

export default useTutatisEcommerce;
