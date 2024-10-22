interface timePropsType {
  hours: number;
  minutes: number;
  id: number;
  Time: string;
}
interface TimeBoxPropsType {
  box: timePropsType;
  onChange: ({ time }: { time: string }) => void;
  checked?: boolean;
}
export const TimeBox: React.FC<TimeBoxPropsType> = ({
  onChange,
  box,
  checked,
}) => {
  return (
    <label
      htmlFor={box.Time}
      className={`hbh-extension-flex hbh-extension-max-w-[140px] hbh-extension-px-2 hbh-extension-py-1.5 hbh-extension-w-full hbh-extension-cursor-pointer hbh-extension-items-center hbh-extension-justify-center hbh-extension-gap-2 hbh-extension-border hbh-extension-border-primary hbh-extension-shadow-md hover:hbh-extension-border-opacity-50 hbh-extension-transition-colors hbh-extension-ease-out hbh-extension-duration-200 hbh-extension-rounded-lg
    ${checked ? "hbh-extension-border-opacity-100" : "hbh-extension-border-opacity-30"}
    peer-disabled:hbh-extension-cursor-not-allowed peer-disabled:hbh-extension-border-opacity-20 peer-disabled:hover:hbh-extension-border-opacity-20 `}
    >
      <input
        type="radio"
        name="radio"
        id={box.Time}
        checked={checked}
        className="hbh-extension-accent-primary hbh-extension-peer disabled:hbh-extension-cursor-not-allowed"
        onChange={() => onChange({ time: box.Time })}
      />
      <small className="hbh-extension-mt-1 hbh-extension-text-inherit hbh-extension-text-secondry peer-disabled:hbh-extension-cursor-not-allowed peer-disabled:hbh-extension-opacity-20">
        {box.Time}
      </small>
    </label>
  );
};
