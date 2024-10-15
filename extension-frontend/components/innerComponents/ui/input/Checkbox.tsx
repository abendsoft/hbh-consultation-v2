import { ChangeEvent } from "react";

interface CheckboxProps {
  name: string;
  checked?: boolean | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  onChange,
  checked,
}) => {
  return (
    <small className="col-span-6 flex items-center py-3 max-md:col-span-12 text-inherit">
      <label
        htmlFor={name}
        className="flex items-center justify-between text-inherit text-primary"
      >
        <input
          id={name}
          name={name}
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span className="ml-1 mr-1 select-none"> I Agree </span>
        <a
          id="checkbox"
          target="_blank"
          className="text-primary underline"
          href="https://healthbeyondhype.com/policies/terms-of-service"
          onClick={(e) => {
            const target = e.target as HTMLAnchorElement;
            document.getElementById("checkbox")?.click();
            window.open(target.href);
          }}
        >
          Terms & Conditions
        </a>
      </label>
    </small>
  );
};
