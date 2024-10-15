import { createContext } from "react";
import { ShopifyContextType } from "./types";

export const tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);
if (tomorrow.getDay() === 0) {
  tomorrow.setDate(tomorrow.getDate() + 1);
}

export const ShopifyContext = createContext<ShopifyContextType>({
  user: null,
  products: [],
  session: {
    note: "",
    attributes: { date: tomorrow.toLocaleDateString("en-CA"), time: null },
  },
  setOrder: () => {},
  setSession: () => {},
  handleCheckout: async () => {},
  order: {
    product: null,
    user: null,
    session: {
      note: "",
      attributes: { date: tomorrow.toLocaleDateString("en-CA"), time: null },
    },
  },
});

export const hourData = [
  { id: 1, Time: "10:00 am", hours: 10, minutes: 0 },
  { id: 2, Time: "11:00 am", hours: 11, minutes: 0 },
  { id: 3, Time: "12:00 pm", hours: 12, minutes: 0 },
  { id: 4, Time: "1:00 pm", hours: 1, minutes: 0 },
  { id: 5, Time: "2:00 pm", hours: 2, minutes: 0 },
  { id: 6, Time: "3:00 pm", hours: 3, minutes: 0 },
];
export const halfHourData = [
  { id: 1, Time: "10:00 am", hours: 10, minutes: 0 },
  { id: 2, Time: "10:30 am", hours: 10, minutes: 30 },
  { id: 3, Time: "11:00 am", hours: 11, minutes: 0 },
  { id: 4, Time: "11:30 am", hours: 11, minutes: 30 },
  { id: 5, Time: "12:00 pm", hours: 12, minutes: 0 },
  { id: 6, Time: "12:30 pm", hours: 12, minutes: 30 },
  { id: 7, Time: "1:00 pm", hours: 1, minutes: 0 },
  { id: 8, Time: "1:30 pm", hours: 1, minutes: 30 },
  { id: 9, Time: "2:00 pm", hours: 2, minutes: 0 },
  { id: 10, Time: "2:30 pm", hours: 2, minutes: 30 },
  { id: 11, Time: "3:00 pm", hours: 3, minutes: 0 },
];
export const options = {
  inline: true,
  altInput: false,
  enableTime: false,
  dateFormat: "Y-m-d",

  enable: [
    function (date: Date) {
      if (date.getDay() === 0) {
        return false;
      }
      return date >= new Date();
    },
  ],
};
