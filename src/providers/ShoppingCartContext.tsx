import { createContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
