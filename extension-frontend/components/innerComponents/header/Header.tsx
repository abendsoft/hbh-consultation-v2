import { ChevronDown, ChevronUp } from "lucide-react";

interface headerPropsType {
  heading?: string;
  step?: number;
  handleHideData: () => void;
  isVisible: boolean;
}

export const Header: React.FC<headerPropsType> = ({
  heading,
  step,
  handleHideData,
  isVisible,
}) => {
  const IconNode = isVisible ? ChevronUp : ChevronDown;

  return (
    <div
      onClick={() => handleHideData()}
      className="relative flex w-full cursor-pointer select-none items-center overflow-hidden rounded-lg bg-primary"
    >
      <h4 className="h4 w-9 border-r border-white bg-primary py-2 text-center font-semibold text-white">
        {step}
      </h4>
      <div className="flex flex-1 items-center justify-between bg-primary py-2 pl-2 text-white">
        <h2 className="text-inherit font-semibold text-white"> {heading}</h2>
        <span className="px-4">
          <IconNode size={17} />
        </span>
      </div>
    </div>
  );
};
