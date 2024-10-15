import { ChangeEvent, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  name: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "tel"
    | "url"
    | "search"
    | "checkbox"
    | "radio"
    | "file"
    | "color"
    | "range"
    | "time"
    | "datetime-local"
    | "month"
    | "week";
  label: string;
  forget?: boolean;
  required?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: { name: string; state: boolean; message: string };
  defaultValue?: string;
  state?: string;
  defaultChecked?: boolean | undefined;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  onChange,
  placeholder,
  defaultValue,
  state,
  type = "text",
  forget = false,
  required = false,
  value,

  defaultChecked,

  error = { name: "", state: false, message: "" },
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("password");
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setPassword(showPassword ? "password" : "text");
  };

  return (
    <>
      {type !== "checkbox" ? (
        <div className="flex w-full flex-col gap-1">
          <label
            htmlFor={name}
            className={`flex items-center justify-between text-inherit ${
              error.name === name && error.state
                ? "text-dander"
                : "text-secondry"
            }`}
          >
            <small>{label}</small>
          </label>
          <div className="relative space-y-3">
            <input
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              required={required}
              placeholder={placeholder}
              defaultValue={defaultValue}
              type={type === "password" ? password : type}
              autoComplete={type === "password" ? "new-password" : "off"}
              className={`placeholder:text-foreground-light  block w-full rounded-md border bg-transparent px-2.5 py-3 pl-4 text-primary shadow-md hover:border-opacity-50 focus:border-opacity-100 focus:outline-none sm:text-inherit ${
                error.name === name && error.state
                  ? "border-dander"
                  : "border-primary border-opacity-30"
              }`}
            />
            {error.name === name && error.state && (
              <p className="text-dander text-left text-xs capitalize transition-all duration-300 ease-out">
                {error.message}
              </p>
            )}
            {type === "password" && (
              <span
                className="absolute right-4 top-1 cursor-pointer select-none text-foreground"
                onClick={handleClickShowPassword}
              >
                {!showPassword ? (
                  <EyeOff strokeWidth={1.5} width={18} />
                ) : (
                  <Eye strokeWidth={1.5} width={18} />
                )}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="input flex items-center">
          <input
            ref={checkboxRef}
            id={name}
            name={name}
            type={type}
            onChange={onChange}
            defaultChecked={defaultChecked}
            className="h-4 w-4 border border-secondry"
          />

          <label
            htmlFor={name}
            className={`ms-2 mt-1 ${state ? "text-foreground" : "text-foreground/70"} text-sm`}
          >
            {label}
          </label>
        </div>
      )}
    </>
  );
};
