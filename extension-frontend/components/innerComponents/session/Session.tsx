import { useState } from "react";
import { Header } from "../header/Header";
import { useAbbandoned, useShopify } from "extension-frontend/components/hooks";

export const Session = () => {
  const { products, order, setOrder } = useShopify();

  const { setCart, cart } = useAbbandoned();
  const [isVisible, setIsVisible] = useState(true);

  const handleHideData = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="hbh-extension-overflow-hidden hbh-extension-transition-all hbh-extension-duration-200 hbh-extension-ease-out">
      <Header
        step={1}
        heading="Choose the Consultation Duration with Matthew Jacobs"
        handleHideData={handleHideData}
        isVisible={isVisible}
      />
      <div
        className={`hbh-extension-space-y-6 hbh-extension-pt-5 hbh-extension-transition-transform hbh-extension-duration-200 hbh-extension-ease-out md:hbh-extension-pb-2 md:hbh-extension-pt-7 ${!isVisible ? "hbh-extension-pointer-events-none hbh-extension-invisible hbh-extension-absolute -hbh-extension-z-50 -hbh-extension-translate-y-full" : "hbh-extension-pointer-events-auto hbh-extension-visible hbh-extension-relative hbh-extension-z-0 hbh-extension-translate-y-0"}`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              setOrder({ ...order, product: product.variants?.[0] });
              setCart((prev: any) => ({
                ...prev,
                consultation: {
                  ...prev.consultation,
                  meeting_duration: product.title,
                  price: `${product.price / 100}.00`,
                },
              }));
            }}
            className={`hbh-extension-cursor-pointer hbh-extension-select-none hbh-extension-rounded-lg hbh-extension-border hbh-extension-border-primary hbh-extension-px-4 hbh-extension-py-2.5 hbh-extension-font-semibold hbh-extension-text-secondry hbh-extension-shadow-md hover:hbh-extension-border-opacity-50 hbh-extension-transition-colors hbh-extension-ease-out hbh-extension-duration-200 
              ${order.product?.id === product.variants?.[0].id ? "hbh-extension-border-opacity-100" : "hbh-extension-border-opacity-30"}
              `}
          >
            <div className="hbh-extension-flex hbh-extension-justify-between max-md:hbh-extension-flex-col max-md:hbh-extension-gap-3">
              <p className="hbh-extension-flex-1 hbh-extension-text-inherit">
                {product.title}
              </p>
              <div className="hbh-extension-flex hbh-extension-flex-1 hbh-extension-justify-between">
                <p>${`${product.price / 100}.00`}</p>
                <input
                  readOnly
                  type="radio"
                  className="hbh-extension-accent-primary"
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
