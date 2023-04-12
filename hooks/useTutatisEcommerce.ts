import { useState } from "react";
import { IHeroBannerProps } from "../components/HeroBanner";

function useTutatisEcommerce() {
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  const [isBannerdata, setIsBannerdata] = useState(false);

  function increasePurchaseQuantity() {
    setPurchaseQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  }

  function decreasePurchaseQuantity() {
    setPurchaseQuantity((prevQuantity) => {
      if (prevQuantity <= 1) {
        return 1;
      }
      return prevQuantity - 1;
    });
  }

  function detectBannerData(bannerData: Array<IHeroBannerProps>) {
    setIsBannerdata(bannerData.length ? true : false);
  }

  return {
    purchaseQuantity,
    isBannerdata,
    setIsBannerdata,
    setPurchaseQuantity,
    increasePurchaseQuantity,
    decreasePurchaseQuantity,
    detectBannerData,
  };
}

export default useTutatisEcommerce;
