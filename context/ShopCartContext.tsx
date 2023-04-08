import { Dispatch, SetStateAction, createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { IChildrenProps } from "../components/Layout";

export interface IProductAdded {
  productId: string;
  productQuantity: number;
  productImage: string;
  productPrice: number;
  productName: string;
  totalPrice: number;
}

export interface IShopCartContext {
  shopCart: IProductAdded[];
  isCartShown: boolean;
  setIsCartShown: Dispatch<SetStateAction<boolean>>;
  addProductToCart: (shopCart: IProductAdded[], product: IProductAdded) => void;
  decreaseProductQuantityOnCart: (prodId: string) => void;
  increaseProductQuantityOnCart: (prodId: string) => void;
  deleteProductFromCart: (shopCart: IProductAdded[], prodId: string) => void;
}

const initialCart: IProductAdded[] = [];

export const ShopCartContext = createContext<IShopCartContext>({
  shopCart: [],
  isCartShown: false,
  setIsCartShown: () => {},
  addProductToCart: () => {},
  decreaseProductQuantityOnCart: () => {},
  increaseProductQuantityOnCart: () => {},
  deleteProductFromCart: () => {},
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

  function decreaseProductQuantityOnCart(prodId: string) {
    const updatedCart = shopCart.map((productInCart) => {
      if (productInCart.productId === prodId) {
        let updatedQty;
        if (productInCart.productQuantity <= 0) {
          updatedQty = 0;
        } else {
          updatedQty = productInCart.productQuantity - 1;
          toast.success("Cantidad del producto actualizada!");
        }
        return {
          ...productInCart,
          productQuantity: updatedQty,
          totalPrice: updatedQty * productInCart.productPrice,
        };
      } else {
        return productInCart;
      }
    });
    setShopCart(updatedCart);
  }

  function increaseProductQuantityOnCart(prodId: string) {
    const updatedCart = shopCart.map((productInCart) => {
      if (productInCart.productId === prodId) {
        const updatedQty = productInCart.productQuantity + 1;

        return {
          ...productInCart,
          productQuantity: updatedQty,
          totalPrice: updatedQty * productInCart.productPrice,
        };
      } else {
        return productInCart;
      }
    });
    setShopCart(updatedCart);
    toast.success("Cantidad del producto actualizada!");
  }

  function deleteProductFromCart(shopCart: IProductAdded[], prodId: string) {
    const updatedCart = shopCart.filter(
      (product) => product.productId !== prodId
    );
    setShopCart(updatedCart);
    toast.success("Producto borrado del carrito!");
  }

  return (
    <ShopCartContext.Provider
      value={{
        shopCart,
        isCartShown,
        setIsCartShown,
        addProductToCart,
        decreaseProductQuantityOnCart,
        increaseProductQuantityOnCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};
