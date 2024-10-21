import { ChangeEvent } from "react";

interface TextareaProps {
  name: string;
  label: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  value,
  required = false,
  placeholder,
  onChange,
  defaultValue,
}) => {
  return (
    <div className="hbh-extension-col-span-12 hbh-extension-space-y-1">
      <label
        htmlFor={name}
        className={`hbh-extension-flex hbh-extension-items-center hbh-extension-justify-between hbh-extension-text-inherit hbh-extension-text-primary`}
      >
        <small>{label}</small>
      </label>

      <textarea
        rows={5}
        name={name}
        required={required}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        className="placeholder:hbh-extension-text-foreground-light hbh-extension-block hbh-extension-w-full hbh-extension-rounded-md hbh-extension-border hbh-extension-border-primary hbh-extension-border-opacity-30 hbh-extension-bg-transparent hbh-extension-px-2.5 hbh-extension-py-3 hbh-extension-pl-4 hbh-extension-text-primary hbh-extension-shadow-md hover:hbh-extension-border-opacity-50 focus:hbh-extension-border-opacity-100 focus:hbh-extension-outline-none sm:hbh-extension-text-inherit"
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};
