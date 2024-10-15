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
  const { cart, setCart, getRecord, slotsData } = useAbbandoned();
  const { timeData } = filterSlots(cart.consultation, slotsData);
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   getRecord("consultation");
  // }, []);

  const handleHideData = () => {
    setIsVisible(!isVisible);
  };

  // const handleUpdateTime = (Time: string) => {
  //   setCart((prev) => ({
  //     ...prev,
  //     consultation: {
  //       ...prev.consultation,
  //       time: Time,
  //     },
  //   }));
  // };

  // const handleDateChange = ([selectedDate]: Date[]) => {
  //   setSession({
  //     ...order.session,
  //     attributes: { ...order.session?.attributes, date: selectedDate },
  //   });
  //   setCart((prev) => ({
  //     ...prev,
  //     consultation: {
  //       ...prev.consultation,
  //       date: selectedDate.toLocaleDateString("en-CA"),
  //     },
  //   }));
  // };

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

  return (
    <div className="overflow-hidden transition-all duration-200 ease-out">
      <Header
        heading="Select the Date and Time"
        step={2}
        handleHideData={handleHideData}
        isVisible={isVisible}
      />

      <div
        className={`flex flex-col gap-3 pt-5 md:pb-2 md:pt-7 ${!isVisible ? "pointer-events-none invisible absolute -z-50 -translate-y-full" : "pointer-events-auto visible relative z-0 translate-y-0"}`}
      >
        <p className="text-inherit text-secondry">
          <span>Below you can find a list of available time slots for </span>
          <span className="px-1 font-bold text-primary">
            {order.product?.name}
          </span>{" "}
          with
          <span className="pl-1 font-bold text-primary"> Matthew Jacobs</span>.
          Click on a time slot to proceed with booking.
        </p>
        <div className="space-y-8">
          {isVisible && (
            <h3 className="calender">
              <Flatpickr
                data-enable-time
                options={options}
                onChange={([date]) => {
                  handleDateAndTime({ date: date });
                }}
                value={order.session?.attributes.date}
                className="flatpickr-hidden-input w-full text-inherit"
              />
            </h3>
          )}
          <div className="flex flex-wrap justify-items-start gap-5">
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
