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
      className={`flex max-w-[150px] px-2 py-1.5 w-full cursor-pointer items-center justify-center gap-2 border border-primary shadow-md hover:border-opacity-50 transition-colors ease-out duration-200 ${checked ? "border-opacity-100" : "border-opacity-30"} rounded-lg`}
    >
      <input
        type="radio"
        name="radio"
        id={box.Time}
        checked={checked}
        className="accent-primary"
        onChange={() => onChange({ time: box.Time })}
      />

      <small className="mt-1 text-inherit text-secondry">{box.Time} </small>
    </label>
  );
};
