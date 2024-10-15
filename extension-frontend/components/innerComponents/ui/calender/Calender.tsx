import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../button/Button";

interface calenderPropsType {
  children: ReactNode;
  handleClick: () => void;
}
export const Calender: React.FC<calenderPropsType> = ({
  children,
  handleClick,
}) => {
  return (
    <div className="h-96 w-1/2 border border-foreground-varient">
      <div className="flex h-12 w-full flex-row items-center border-b border-foreground-varient p-1">
        <Button rounded="none">
          <ChevronLeft height={20} />
        </Button>
        <div className="flex-1">
          <Button onClick={handleClick} rounded="none" fullWidth>
            year
          </Button>
        </div>
        <Button rounded="none">
          <ChevronRight height={20} />
        </Button>
      </div>
      {children}
    </div>
  );
};
