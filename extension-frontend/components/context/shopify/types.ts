import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ShopifyContextType {
  order: Order;
  user: User | null;
  products: Product[];
  session: Session;
  handleCheckout: () => void;
  setOrder: Dispatch<SetStateAction<Order>>;
  setSession: Dispatch<SetStateAction<Session>>;
}

export interface Order {
  product: Variant | null;
  user: User | null;
  session: Session;
}
export interface Session {
  note: string;
  attributes: {
    date: any;
    time: any;
  };
}

export type ShopifyProviderProps = {
  children: ReactNode;
};

export interface User {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
}

export interface Variant {
  id: number;
  name: string;
  price: number;
}

export interface Product {
  id: number;
  price: number;
  title: string;
  variants: Variant[];
}

export interface Products {
  products: Product[];
}
export interface Customer {
  user: User;
}

export interface ShopifyRoutes {
  account_addresses_url: string;
  account_login_url: string;
  account_logout_url: string;
  account_recover_url: string;
  account_register_url: string;
  account_url: string;
  all_products_collection_url: string;
  cart_add_url: string;
  cart_change_url: string;
  cart_clear_url: string;
  cart_update_url: string;
  cart_url: string;
  collections_url: string;
  predictive_search_url: string;
  product_recommendations_url: string;
  root_url: string;
  search_url: string;
}
