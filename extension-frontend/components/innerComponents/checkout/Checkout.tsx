import { Button } from "extension-frontend/components/innerComponents/ui";
import { useShopify } from "extension-frontend/components/hooks";
import { Textarea } from "../ui/input/Textarea";
import { useState } from "react";

export const Checkout = () => {
  const { order, session, handleCheckout, setSession } = useShopify();
  const [error, setError] = useState<boolean>(false);

  return (
    <div>
      <div className="hbh-extension-w-full hbh-extension-space-y-3 hbh-extension-rounded-lg hbh-extension-border hbh-extension-border-gray-300 hbh-extension-bg-white/5 hbh-extension-font-extrabold hbh-extension-text-primary hbh-extension-shadow-md hbh-extension-px-6 hbh-extension-py-4">
        <div className="hbh-extension-mx-auto hbh-extension-space-y-6 hbh-extension-py-4">
          <h2 className="hbh-extension-text-inherit hbh-extension-text-primary hbh-extension-font-semibold">
            Consultation Summary
          </h2>
          <div className="hbh-extension-flex hbh-extension-justify-between hbh-extension-items-center hbh-extension-space-x-4">
            <div className="hbh-extension-rounded-md hbh-extension-border hbh-extension-border-primary hbh-extension-p-3.5">
              <h4 className="hbh-extension-rounded-md hbh-extension-text-inherit hbh-extension-text-secondry">
                {order.product?.name}
              </h4>
            </div>
            <p className="hbh-extension-flex hbh-extension-items-center hbh-extension-justify-center hbh-extension-p-2 hbh-extension-text-inherit hbh-extension-font-bold hbh-extension-text-secondry">
              ${`${order.product?.price! / 100}.00`}
            </p>
          </div>
          <div className="hbh-extension-flex hbh-extension-flex-col hbh-extension-gap-2">
            <Textarea
              required
              name="note"
              label="Health concern"
              placeholder="Type here..."
              onChange={(e) => {
                setSession((prev) => ({
                  note: e.target.value,
                  attributes: { ...prev.attributes },
                }));
              }}
            />
            {error && (
              <small className="hbh-extension-text-danger">
                Note is required
              </small>
            )}
          </div>
          <div>
            <Button
              fullWidth
              onClick={() => {
                if (session.note.trim().length === 0) {
                  setError(true);
                } else {
                  handleCheckout;
                }
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
