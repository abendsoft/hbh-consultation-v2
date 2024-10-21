import { AbandonedCartProvider } from "./context";
import { Checkout, DateAndTime, Session, UserInfo } from "./innerComponents";
import "flatpickr/dist/themes/airbnb.css";

export const App = ({}) => {
  return (
    <AbandonedCartProvider>
      <div className="hbh-extension-relative hbh-extension-mx-auto hbh-extension-w-4/5 hbh-extension-pt-10 max-md:hbh-extension-pb-10">
        <div className="hbh-extension-grid hbh-extension-grid-cols-12 hbh-extension-gap-4 md:hbh-extension-gap-7">
          <div className="hbh-extension-col-span-12 hbh-extension-space-y-5 md:hbh-extension-col-span-8">
            <Session />
            <DateAndTime />
          </div>
          <div className="max-md:hbh-extension-col-span-12 md:hbh-extension-sticky md:hbh-extension-top-32 md:hbh-extension-col-span-4 md:hbh-extension-h-screen">
            <Checkout />
          </div>
        </div>
      </div>
    </AbandonedCartProvider>
  );
};
