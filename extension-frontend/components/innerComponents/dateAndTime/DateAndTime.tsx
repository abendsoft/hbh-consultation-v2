import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";

import { useAbbandoned, useShopify } from "../../hooks";
import { options } from "../../context/shopify/ShopifyContext";
import { TimeBox } from "./timeBox/TimeBox";
import { filterSlots } from "./timeSlots";
import { Header } from "../header/Header";
import { Session } from "extension-frontend/components/context";

export const DateAndTime = () => {
  const { order, setSession } = useShopify();
  const { cart, getRecord, slotsData } = useAbbandoned();
  const { timeData } = filterSlots(cart.consultation, slotsData);
  const [isVisible, setIsVisible] = useState(true);

  console.log("timeData==>", timeData);
  useEffect(() => {
    getRecord("consultation");
  }, []);

  const handleHideData = () => {
    setIsVisible(!isVisible);
  };

  const handleDateAndTime = ({
    date,
    time,
  }: {
    date?: Date;
    time?: string;
  }) => {
    if (date) {
      setSession((prev: Session) => ({
        note: prev.note,
        attributes: {
          ...prev.attributes,
          date: date.toLocaleDateString("en-CA"),
        },
      }));
    }
    if (time) {
      setSession((prev: Session) => ({
        note: prev.note,
        attributes: { ...prev.attributes, time: time },
      }));
    }
  };

  console.log("cart==>", cart);

  return (
    <div className="hbh-extension-overflow-hidden hbh-extension-transition-all hbh-extension-duration-200 hbh-extension-ease-out">
      <Header
        heading="Select the Date and Time"
        step={2}
        handleHideData={handleHideData}
        isVisible={isVisible}
      />

      <div
        className={`hbh-extension-flex hbh-extension-flex-col hbh-extension-gap-3 hbh-extension-pt-5 md:hbh-extension-pb-2 md:hbh-extension-pt-7 ${!isVisible ? "hbh-extension-pointer-events-none hbh-extension-invisible absolute -hbh-extension-z-50 -hbh-extension-translate-y-full" : "hbh-extension-pointer-events-auto hbh-extension-visible hbh-extension-relative hbh-extension-z-0 hbh-extension-translate-y-0"}`}
      >
        <p className="hbh-extension-text-inherit hbh-extension-text-secondry">
          <span>Below you can find a list of available time slots for </span>
          <span className="hbh-extension-px-1 hbh-extension-font-bold hbh-extension-text-primary">
            {order.product?.name}
          </span>{" "}
          with
          <span className="hbh-extension-pl-1 hbh-extension-font-bold hbh-extension-text-primary">
            {" "}
            Matthew Jacobs
          </span>
          . Click on a time slot to proceed with booking.
        </p>
        <div className="hbh-extension-space-y-8">
          {isVisible && (
            <h3 className="calender">
              <Flatpickr
                data-enable-time
                options={options}
                onChange={([date]: any) => {
                  handleDateAndTime({ date: date });
                }}
                value={order.session?.attributes.date}
                className="flatpickr-hidden-input hbh-extension-w-full hbh-extension-text-inherit"
              />
            </h3>
          )}
          <div className="hbh-extension-flex hbh-extension-flex-wrap hbh-extension-justify-items-start hbh-extension-gap-5">
            {timeData.length > 0 &&
              timeData.map((box) => (
                <TimeBox
                  key={box.id}
                  box={box}
                  onChange={handleDateAndTime}
                  checked={order.session.attributes.time === box.Time}
                />
              ))}
            {timeData.length === 0 && (
              <p className="px-1 text-inherit font-bold text-primary">
                Today All appointments are booked
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
