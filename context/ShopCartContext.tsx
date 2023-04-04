import { Dispatch, SetStateAction, createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { IChildrenProps } from "../components/Layout";

export interface IProductAdded {
  productId: string;
  productQuantity: number;
  productImage: string;
  productPrice: number;
}

export interface IShopCartContext {
  shopCart: IProductAdded[];
  isCartShown: boolean;
  setIsCartShown: Dispatch<SetStateAction<boolean>>;
  addProductToCart: (shopCart: IProductAdded[], product: IProductAdded) => void;
}

const initialCart: IProductAdded[] = [];

export const ShopCartContext = createContext<IShopCartContext>({
  shopCart: [],
  isCartShown: false,
  setIsCartShown: () => {},
  addProductToCart: () => {},
});

export const ShopCartContextProvider = ({ children }: IChildrenProps) => {
  const [shopCart, setShopCart] = useState(initialCart);
  const [isCartShown, setIsCartShown] = useState(false);

  function addProductToCart(
    shopCart: IProductAdded[],
    addedProduct: IProductAdded
  ) {
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

  return (
    <ShopCartContext.Provider
      value={{
        shopCart,
        isCartShown,
        setIsCartShown,
        addProductToCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};
