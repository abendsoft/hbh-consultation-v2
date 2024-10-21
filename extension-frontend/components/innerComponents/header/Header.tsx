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
      className="hbh-extension-relative hbh-extension-flex hbh-extension-w-full hbh-extension-cursor-pointer hbh-extension-select-none hbh-extension-items-center hbh-extension-overflow-hidden hbh-extension-rounded-lg hbh-extension-bg-primary"
    >
      <h4 className="hbh-extension-h4 hbh-extension-w-9 hbh-extension-border-r hbh-extension-border-white hbh-extension-bg-primary hbh-extension-py-2 hbh-extension-text-center hbh-extension-font-semibold hbh-extension-text-white">
        {step}
      </h4>
      <div className="hbh-extension-flex hbh-extension-flex-1 hbh-extension-items-center hbh-extension-justify-between hbh-extension-bg-primary hbh-extension-py-2 hbh-extension-pl-2 hbh-extension-text-white">
        <h2 className="hbh-extension-text-inherit hbh-extension-font-semibold hbh-extension-text-white">
          {" "}
          {heading}
        </h2>
        <span className="hbh-extension-px-4">
          <IconNode size={17} />
        </span>
      </div>
    </div>
  );
};
