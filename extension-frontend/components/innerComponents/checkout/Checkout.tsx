import { Button } from "extension-frontend/components/innerComponents/ui";
import { useShopify } from "extension-frontend/components/hooks";
import { Textarea } from "../ui/input/Textarea";

export const Checkout = () => {
  const { order, handleCheckout, setSession } = useShopify();

  return (
    <div>
      <div className="w-full space-y-3 rounded-lg border border-gray-300 bg-white/5 font-extrabold text-primary shadow-md px-6 py-4">
        <div className="mx-auto space-y-6 py-4">
          <h2 className="text-inherit text-primary font-semibold">
            Consultation Summary
          </h2>
          <div className="flex justify-between items-center space-x-4">
            <div className="rounded-md border border-primary p-3.5">
              <h4 className="rounded-md text-inherit text-secondry">
                {order.product?.name}
              </h4>
            </div>
            <p className="flex items-center justify-center p-2 text-inherit font-bold text-secondry">
              ${`${order.product?.price! / 100}.00`}
            </p>
          </div>
          <div>
            <Textarea
              name="note"
              label="Health concern"
              placeholder="Type here..."
              onChange={(e) => {
                // setSession({
                //   note: e.target.value,
                //   attributes: {
                //     date: order.session.attributes.date,
                //     time: order.session.attributes.time,
                //   },
                // });
                setSession((prev) => ({
                  note: e.target.value,
                  attributes: { ...prev.attributes },
                }));
              }}
            />
          </div>
          <div>
            <Button fullWidth onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
