import { AbandonedCartProvider } from "./context";
import { Checkout, DateAndTime, Session, UserInfo } from "./innerComponents";
import "flatpickr/dist/themes/airbnb.css";

export const App = ({}) => {
  return (
    <AbandonedCartProvider>
      <div className="relative mx-auto w-4/5 pt-10 max-md:pb-10">
        <div className="grid grid-cols-12 gap-4 md:gap-7">
          <div className="col-span-12 space-y-5 md:col-span-8">
            <Session />
            <DateAndTime />
            {/* <UserInfo user={customer} /> */}
          </div>
          <div className="max-md:col-span-12 md:sticky md:top-32 md:col-span-4 md:h-screen">
            <Checkout />
          </div>
        </div>
      </div>
    </AbandonedCartProvider>
  );
};
