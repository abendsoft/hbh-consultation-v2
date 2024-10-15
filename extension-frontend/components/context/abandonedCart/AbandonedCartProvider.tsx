import { useEffect, useState } from "react";
// import { createRecordApi, getRecordsApi } from '@src/api/endpoints/index.'
import { AbandonedCartContext } from "./AbandonedCartContext";
import { initialData } from "./data";
import { AbandonedCartProviderProps, Cart, slotsDataType } from "./types";
import { filterSlots } from "../../innerComponents/dateAndTime/timeSlots";

export const AbandonedCartProvider = ({
  children,
}: AbandonedCartProviderProps) => {
  const [cart, setCart] = useState<Cart>(initialData);
  const [slotsData, setSlotsData] = useState<null | slotsDataType[]>(null);
  const { filteredHalfHourSlots, filteredHourSlots } = filterSlots(
    cart.consultation,
    slotsData
  );

  const timeInitialValue =
    cart.consultation.meeting_duration === "Consultation for 30 minutes" &&
    filteredHalfHourSlots.length > 0
      ? filteredHalfHourSlots[0].Time
      : cart.consultation.meeting_duration === "Consultation for 60 minutes" &&
          filteredHourSlots.length > 0
        ? filteredHourSlots[0].Time
        : "";

  useEffect(() => {
    setCart((prevCart) => ({
      ...prevCart,
      consultation: {
        ...prevCart.consultation,
        time: timeInitialValue,
      },
    }));
  }, [timeInitialValue, slotsData]);

  const getRecord = async (endpoint: string) => {
    // await getRecordsApi(endpoint).then((res: any) => {
    //     if (res.code === 200) {
    //         setSlotsData(res.result)
    //     }
    // })
  };

  const createRecord = async (endpoint: string) => {
    // await createRecordApi(endpoint, cart).then((res: any) => {
    //     if (res.code === 200) {
    //         getRecord('/consultation')
    //         setCart(initialData)
    //     }
    // })
  };
  return (
    <AbandonedCartContext.Provider
      value={{ cart, setCart, getRecord, createRecord, slotsData }}
    >
      {children}
    </AbandonedCartContext.Provider>
  );
};
