import { cn } from "../../lib/utils";

type Props = {
  enabled: boolean;
  onChange: (v: boolean) => void;
};

const Switch = ({ enabled, onChange }: Props) => {
  return (
    <div className="period-options bg-gray-100 rounded-lg flex justify-center items-center gap-5 p-3 font-semibold">
      <span className={enabled ? "text-gray-400" : "text-blue-950"}>
        Monthly
      </span>
      <div
        className="bg-blue-950 w-9 h-4.5 px-0.5 rounded-full flex items-center cursor-pointer"
        onClick={() => {
          onChange?.(!enabled);
        }}
      >
        <span
          className={cn("bg-white size-3 rounded-full", { "ml-5": enabled })}
        ></span>
      </div>
      <span className={enabled ? "text-gray-400" : " text-blue-950"}>
        Yearly
      </span>
    </div>
  );
};

export default Switch;
