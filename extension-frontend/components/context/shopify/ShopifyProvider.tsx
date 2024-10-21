import { useEffect, useState } from "react";
import { ShopifyContext, tomorrow } from "./ShopifyContext";
import {
  Customer,
  Order,
  Products,
  Session,
  ShopifyProviderProps,
  ShopifyRoutes,
} from "./types";

export const ShopifyProvider = ({ children }: ShopifyProviderProps) => {
  const { products }: Products = window.product;
  const { user }: Customer = window.customer;
  const routes: ShopifyRoutes = window.routes;
  const shop: string = window.shop;

  const [session, setSession] = useState<Session>({
    note: "",
    attributes: { date: tomorrow.toLocaleDateString("en-CA"), time: null },
  });
  const [order, setOrder] = useState<Order>({
    user: user,
    session: session,
    product: products[0]?.variants[0],
  });

  useEffect(() => {
    if (products.length > 0 && user.email) {
      setOrder({ ...order, user: user });
    }
    setOrder((prev) => ({ ...prev, session: session }));
    if (!user.first_name) {
      window.location.href = "/account";
    }
  }, [products, user, session]);

  const handleCheckout = async () => {
    const url = `${shop}${routes.cart_add_url}`;
    if (order.product && order.session) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: order.product?.id,
              quantity: 1,
            },
          ],
          note: order.session.note,
          attributes: {
            date: order.session.attributes.date,
            time: order.session.attributes.time,
            type: "Subscription",
          },
        }),
      })
        .then((res) => {
          if (res.ok) {
            window.location.href = "/checkout";
          }
        })
        .catch((err) => console.log("error==>", err));
      console.log("res==>", res);
    }
  };

  return (
    <ShopifyContext.Provider
      value={{
        products,
        user,
        session,
        order,
        setSession,
        setOrder,
        handleCheckout,
      }}
    >
      {children}
    </ShopifyContext.Provider>
  );
};
