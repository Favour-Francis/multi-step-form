import "../components/App.css";
import items from "../lib/addons";
import plans from "../lib/plans";
import useGlobalStore from "../store/global";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function Summary({ onNext, onBack }: Props) {
  const subscription = useGlobalStore((state) => state.data.subscription);
  const addons = useGlobalStore((state) => state.data.addons);

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <div className="form min-w-full transform sm:translate-0 -translate-y-24 flex sm:flex-col justify-center items-center">
        <div className="bg-white w-110  sm:p-0 p-8 text-blue-950 sm:grid justify-between font-semibold rounded-xl ">
          <div className="top *:my-5">
            <span>
              <h1 className="text-2xl font-bold ">Finishing up</h1>
              <p className="sm:text-sm text-lg text-gray-400">
                Double-check everything looks OK before confirming.
              </p>
            </span>
            <div className="final-options bg-gray-100 rounded-xl ">
              <div className="game-type border-b-2 border-gray-200 p-3 flex justify-between items-center">
                <span>
                  <h1 className="text-md font-bold capitalize">
                    {subscription.type} ({subscription.period})
                  </h1>
                  <a className="underline text-sm text-blue-700 cursor-pointer">
                    Change
                  </a>
                </span>
                <span className="font-bold">
                  $
                  {plans.find((p) => p.id === subscription.type)?.price[
                    subscription.period
                  ] || 0}
                  /mo
                </span>
              </div>
              <div className="text-md p-3 text-gray-400 [&_p]:text-blue-950">
                {addons.map((addon) => {
                  const addonData = items.find((i) => i.id === addon);
                  if (!addonData) return null;
                  return (
                    <p
                      key={addon}
                      className="flex justify-between items-center"
                    >
                      {addonData.name}
                      <span>+$ {addonData.price[subscription.period]}/mo</span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bottom flex justify-between mt-15">
            <button
              onClick={onBack}
              className="text-gray-400 text-lg sm:block hidden cursor-pointer"
            >
              Go Back
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-950  text-gray-200 sm:block hidden font-bold py-2 px-3 rounded-lg cursor-pointer"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
      <div className="bottom sm:hidden w-full flex justify-between p-5 font-bold">
        <button
          onClick={onBack}
          className="text-gray-400 text-lg  cursor-pointer"
        >
          Go Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-950 m text-gray-200 py-3 px-4  rounded-lg cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </>
  );
}
