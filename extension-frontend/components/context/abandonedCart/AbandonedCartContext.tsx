import { createContext } from "react";
import { SessionContextType } from "./types";

export const AbandonedCartContext = createContext<SessionContextType>({
  cart: { consultation: {}, payment: {}, client: {}, order: {} },
  slotsData: {},
  setCart: () => {},
  getRecord: () => {},
  createRecord: () => {},
});
