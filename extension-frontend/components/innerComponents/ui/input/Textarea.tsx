import { ChangeEvent } from "react";

interface TextareaProps {
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  defaultValue,
}) => {
  return (
    <div className="col-span-12 space-y-1">
      <label
        htmlFor={name}
        className={`flex items-center justify-between text-inherit text-primary`}
      >
        <small>{label}</small>
      </label>

      <textarea
        rows={5}
        name={name}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        className="placeholder:text-foreground-light block w-full rounded-md border border-primary border-opacity-30 bg-transparent px-2.5 py-3 pl-4 text-primary shadow-md hover:border-opacity-50 focus:border-opacity-100 focus:outline-none sm:text-inherit"
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};
