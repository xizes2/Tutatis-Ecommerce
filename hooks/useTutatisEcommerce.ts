import { useState } from "react";

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

  return {
    purchaseQuantity,
    setPurchaseQuantity,
    increasePurchaseQuantity,
    decreasePurchaseQuantity,
  };
}

export default useTutatisEcommerce;
