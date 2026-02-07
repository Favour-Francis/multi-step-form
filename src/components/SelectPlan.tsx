import "./App.css";

import { cn } from "../lib/utils";
import useGlobalStore, { type ISubscriptionTypes } from "../store/global";
import Switch from "./ui/Switch";
import plans from "../lib/plans";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function SelectPlan({ onNext, onBack }: Props) {
  const subsciption = useGlobalStore((state) => state.data.subscription);
  const updateData = useGlobalStore((state) => state.updateData);

  const handleNext = () => {
    if (!subsciption.period || !subsciption.type) return;
    onNext();
  };

  const handleToggleYearly = () => {
    updateData({
      subscription: {
        ...subsciption,
        period: subsciption.period === "monthly" ? "yearly" : "monthly",
      },
    });
  };

  const handleTypeClick = (type: ISubscriptionTypes) => {
    updateData({
      subscription: {
        ...subsciption,
        type,
      },
    });
  };

  return (
    <form
      onSubmit={handleNext}
      className="container sm:max-w-[calc(1050px)] sm:bg-white grid sm:grid-cols-[0.5fr_1fr] sm:justify-between justify-center sm:gap-15 sm:p-3 sm:rounded-xl"
    >
      <div className="form min-w-full transform sm:translate-0 -translate-y-24 flex sm:flex-col justify-center items-center ">
        <div className="bg-white w-110 sm:p-0 p-8 text-blue-950 sm:grid justify-between sm:gap-2 rounded-xl">
          <div className="top sm:mb-13 *:my-5 sm:*:my-5">
            <span>
              <h1 className="text-2xl font-bold">Select your plan</h1>
              <p className="sm:text-sm text-md text-gray-400">
                You have the option of monthly or yearly billing.
              </p>
            </span>

            <div className="game-options grid sm:grid-cols-[1fr_1fr_1fr] sm:gap-3 gap-2.5 font-semibold ">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(
                    `sm:w-28 sm:h-35 h-20 sm:grid flex items-center sm:*:ml-3 *:ml-4 rounded-lg cursor-pointer`,
                    `hover:bg-gray-200 hover:border hover:border-blue-900 border-2 border-gray-300`,
                    // prettier-ignore
                    { "border border-blue-950 bg-gray-200": subsciption.type === plan.id },
                  )}
                  onClick={() => handleTypeClick(plan.id)}
                >
                  <img
                    className="size-9 rounded-full"
                    src={plan.image}
                    alt={plan.name}
                  />
                  <span>
                    <h1 className="font-bold">{plan.name}</h1>
                    <p className="text-sm text-gray-400">
                      ${plan.price[subsciption.period]}/
                      {{ monthly: "mo", yearly: "yr" }[subsciption.period]}
                    </p>
                    {subsciption.period === "yearly" && (
                      <p className="text-xs tracking-tight">2 months free</p>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <Switch
              enabled={subsciption.period === "yearly"}
              onChange={handleToggleYearly}
            />
          </div>
          <div className="bottom flex justify-between font-bold">
            <button
              type="button"
              onClick={onBack}
              className="text-gray-400 text-lg sm:block hidden cursor-pointer"
            >
              Go Back
            </button>
            <button
              type="submit"
              className="bg-blue-950  text-gray-200 sm:block hidden font-bold py-2 px-3 rounded-lg cursor-pointer"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
      <div className="bottom sm:hidden w-full flex justify-between p-5 font-bold">
        <button
          type="button"
          className="text-gray-400 text-lg cursor-pointer"
          onClick={onBack}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-blue-950 m text-gray-200 font-bold py-3 px-4  rounded-lg cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
