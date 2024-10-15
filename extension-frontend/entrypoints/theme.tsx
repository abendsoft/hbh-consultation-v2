import "vite/modulepreload-polyfill";
// import React from "react";
import ReactDOM from "react-dom/client";
import {
  type Customer,
  type Products,
  type ShopifyRoutes,
  ShopifyProvider,
} from "extension-frontend/components/context";
import { App } from "../components/App";

import "./theme.css";

declare global {
  interface Window {
    product: Products;
    customer: Customer;
    shop: string;
    routes: ShopifyRoutes;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShopifyProvider>
      <App />
    </ShopifyProvider>
  </React.StrictMode>
);
