import { ShoppingCartContext } from "../providers/ShoppingCartProvider";
import { useContext } from "react";

export default function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
