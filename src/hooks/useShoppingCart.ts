import { ShoppingCartContext } from "../providers/ShoppingCartContext";
import { useContext } from "react";

export default function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
