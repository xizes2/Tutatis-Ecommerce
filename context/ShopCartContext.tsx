import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { IChildrenProps } from "../components/Layout";
import { IProductAdded } from "../hooks/useTutatisEcommerce";

export interface IShopCartContext {
  shopCart: IProductAdded[];
  addProductToCart: (shopCart: IProductAdded[], product: IProductAdded) => void;
}

const initialCart: IProductAdded[] = [];

export const ShopCartContext = createContext<IShopCartContext>({
  shopCart: [],
  addProductToCart: () => {},
});

export const ShopCartContextProvider = ({ children }: IChildrenProps) => {
  const [shopCart, setShopCart] = useState(initialCart);

  function addProductToCart(shopCart: IProductAdded[], product: IProductAdded) {
    const isProductOnShopCart = shopCart.some(
      (productInCart) => productInCart.productId === product.productId
    );

    if (!isProductOnShopCart) {
      setShopCart([...shopCart, product]);
      toast.success("Producto agregado al carrito!");
    } else {
      const updatedCart = shopCart.map((productInCart) => {
        if (productInCart.productId === product.productId) {
          return {
            ...productInCart,
            productQuantity:
              productInCart.productQuantity + product.productQuantity,
          };
        } else {
          return productInCart;
        }
      });
      setShopCart(updatedCart);
      toast.success("Cantidad del producto actualizada!");
    }
  }

  return (
    <ShopCartContext.Provider
      value={{
        shopCart,
        addProductToCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};
