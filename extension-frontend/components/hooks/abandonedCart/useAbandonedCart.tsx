import { useContext } from "react";
import { AbandonedCartContext } from "../../context";

export const useAbbandoned = () => {
  const context = useContext(AbandonedCartContext);

  if (!context) throw new Error("Expected to be wrapped in a Loader Provider");

  return context;
};
