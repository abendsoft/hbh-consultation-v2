import { Customer } from "extension-frontend/components/types";

interface DescriptionProps {
  user: Customer;
}
export const Description: React.FC<DescriptionProps> = ({ user }) => {
  return (
    <div>
      <p className="text-inherit text-secondry">
        You selected a booking for
        <span className="px-1 font-bold text-primary">
          {/* {cart.consultation.meeting_duration} */}
        </span>
        with
        <span className="px-1 font-bold text-primary">Matthew Jacobs</span>
        at
        <span className="px-1 font-bold text-primary">
          {/* {cart.consultation.time} */}
        </span>
        on
        <span className="px-1 font-bold text-primary">
          {/* {cart.consultation.date} */}
        </span>
        . The price for the service is
        <span className="pl-1 font-bold text-primary">
          {/* ${cart.consultation.price} */}
        </span>
        . Please provide your details in the form below to proceed with booking.
      </p>
    </div>
  );
};
