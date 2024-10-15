import { useContext } from "react";
import { ShopifyContext } from "../../context";

export const useShopify = () => {
  const context = useContext(ShopifyContext);

  if (!context) throw new Error("Expected to be wrapped in a Shopify Provider");

  return context;
};
