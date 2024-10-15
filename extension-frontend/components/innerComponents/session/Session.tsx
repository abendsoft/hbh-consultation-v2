import { useState } from "react";
import { Header } from "../header/Header";
// import { sessionData } from "./data";
import { useShopify } from "extension-frontend/components/hooks";

export const Session = () => {
  const { products, order, setOrder } = useShopify();

  // const { setCart, cart } = useAbbandoned();
  const [isVisible, setIsVisible] = useState(true);

  const handleHideData = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="overflow-hidden transition-all duration-200 ease-out">
      <Header
        step={1}
        heading="Choose the Consultation Duration with Matthew Jacobs"
        handleHideData={handleHideData}
        isVisible={isVisible}
      />
      <div
        className={`space-y-6 pt-5 transition-transform duration-200 ease-out md:pb-2 md:pt-7 ${!isVisible ? "pointer-events-none invisible absolute -z-50 -translate-y-full" : "pointer-events-auto visible relative z-0 translate-y-0"}`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              setOrder({ ...order, product: product.variants?.[0] });
            }}
            className={`cursor-pointer select-none rounded-lg border border-primary px-4 py-2.5 font-semibold text-secondry shadow-md hover:border-opacity-50 transition-colors ease-out duration-200 
              ${order.product?.id === product.variants?.[0].id ? "border-opacity-100" : "border-opacity-30"}
              `}
          >
            <div className="flex justify-between max-md:flex-col max-md:gap-3">
              <p className="flex-1 text-inherit">{product.title}</p>
              <div className="flex flex-1 justify-between">
                <p>${`${product.price / 100}.00`}</p>
                <input
                  readOnly
                  type="radio"
                  className="accent-primary"
                  checked={order.product?.id === product.variants?.[0].id}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
