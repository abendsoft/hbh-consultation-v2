import { halfHourData, hourData } from "./data";
import { slotsDataType } from "./types";

export const filterSlots = (
  cartConsultation: any,
  slotsData: null | slotsDataType[]
) => {
  const date = new Date(cartConsultation.date);
  const dateString = date.toISOString();

  const sixtyMinuteSlots = slotsData?.filter(
    (slot) =>
      slot.date === dateString &&
      slot.meeting_duration === "Consultation for 60 minutes"
  );

  const thirtyMinuteSlots = slotsData?.filter(
    (slot) =>
      slot.date === dateString &&
      slot.meeting_duration === "Consultation for 30 minutes"
  );

  const updatedHalfHourData = [...halfHourData];
  const updatedHourData = [...hourData];

  sixtyMinuteSlots?.forEach((slot) => {
    const index = updatedHalfHourData.findIndex(
      (item) => item.Time === slot.time
    );
    if (index !== -1) {
      updatedHalfHourData.splice(index, 2);
    }
  });

  thirtyMinuteSlots?.forEach((slot) => {
    const index = updatedHalfHourData.findIndex(
      (item) => item.Time === slot.time
    );
    if (index !== -1) {
      updatedHalfHourData.splice(index, 1);
    }
  });

  thirtyMinuteSlots?.forEach((slot) => {
    const [slotTime, meridiem] = slot.time.split(" ");
    const [slotHours, slotMinutes] = slotTime.split(":");

    if (slotMinutes === "30") {
      const hourSlotIndex = updatedHourData.findIndex(
        (item) => item.Time === `${slotHours}:00 ${meridiem}`
      );
      if (hourSlotIndex !== -1) {
        updatedHourData.splice(hourSlotIndex, 1);
      }
    } else {
      const hourSlotIndex = updatedHourData.findIndex(
        (item) => item.Time === slot.time
      );
      if (hourSlotIndex !== -1) {
        updatedHourData.splice(hourSlotIndex, 1);
      }
    }
  });

  sixtyMinuteSlots?.forEach((slot) => {
    const index = updatedHourData.findIndex((item) => item.Time === slot.time);
    if (index !== -1) {
      updatedHourData.splice(index, 1);
    }
  });

  const timeData =
    cartConsultation.meeting_duration === "Consultation for 30 minutes"
      ? updatedHalfHourData
      : cartConsultation.meeting_duration === "Consultation for 60 minutes"
        ? updatedHourData
        : [];

  return {
    filteredHalfHourSlots: updatedHalfHourData,
    filteredHourSlots: updatedHourData,
    timeData,
  };
};
