import { useState } from "react";
import { useAbbandoned } from "../../hooks";
import { Header } from "../header/Header";
import { Input } from "../ui";
import { HandleChangeEvent, userInfoData } from "./data";
import { handleValidations } from "../../utils/functions/validation";
import { Customer } from "extension-frontend/components/types";
import { Description } from "./Description";
import { Textarea } from "../ui/input/Textarea";
import { Checkbox } from "../ui/input/Checkbox";

interface UserInfoProps {
  user: Customer;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  console.log("customer==>", user);
  const { cart, setCart } = useAbbandoned();

  const [isVisible, setIsVisible] = useState(true);
  const [error, setError] = useState<
    Record<string, { name: string; state: boolean; message: string }>
  >({
    phone: { name: "", state: false, message: "" },
    email: { name: "", state: false, message: "" },
  });

  const handleHideData = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const newValue = type === "checkbox" ? checked : value;

    handleValidations(name, value, setError);

    setCart((prevData) => ({
      ...prevData,
      client: {
        ...prevData.client,
        [name]: newValue,
      },
    }));
  };

  return (
    <div className="overflow-hidden transition-all duration-200 ease-out">
      <Header
        isVisible={isVisible}
        heading="Add your information"
        step={3}
        handleHideData={handleHideData}
      />

      <div
        className={`space-y-5 pt-5 md:pb-2 md:pt-7 ${!isVisible ? "pointer-events-none invisible absolute -z-50 -translate-y-full" : "pointer-events-auto visible relative z-0 translate-y-0"}`}
      >
        <Description user={user} />
        <div className="grid grid-cols-2 px-1 items-center gap-2">
          <div className="col-span-1">
            <Input
              name="firstName"
              label="First name"
              placeholder="First name"
              defaultValue={user?.first_name ?? undefined}
            />
          </div>
          <div className="col-span-1">
            <Input
              name="lastName"
              label="Last name"
              defaultValue={user?.last_name ?? undefined}
              placeholder="Last name"
            />
          </div>
          <div className="col-span-1">
            <Input
              type="tel"
              name="phone"
              label="Phone"
              placeholder="Phone"
              defaultValue={user?.phone ?? undefined}
            />
          </div>
          <div className="col-span-1">
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              defaultValue={user?.email ?? undefined}
            />
          </div>
          <div className="col-span-2">
            <Textarea
              name="message"
              label="Health concern"
              placeholder="Type here..."
            />
          </div>
          <div className="col-span-2">
            <Checkbox name="terms" />
          </div>
        </div>
      </div>
    </div>
  );
};
