import "../components/App.css";
import items from "../lib/addons";
import useGlobalStore from "../store/global";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function PickAddons({ onNext, onBack }: Props) {
  const subscription = useGlobalStore((state) => state.data.subscription);
  const addons = useGlobalStore((state) => state.data.addons);
  const updateData = useGlobalStore((state) => state.updateData);

  const handleNext = () => {
    onNext();
  };

  return (
    <form
      onSubmit={handleNext}
      className="container sm:max-w-[calc(1050px)] sm:bg-white grid sm:grid-cols-[0.5fr_1fr] sm:justify-between justify-center sm:gap-15 sm:p-3 sm:rounded-xl"
    >
      <div className="form min-w-full transform sm:translate-0 -translate-y-24 flex sm:flex-col justify-center items-center ">
        <div className="bg-white w-110 sm:p-0 p-8 text-blue-950 font-semibold rounded-xl ">
          <div className="top *:my-5 sm:*:my-5">
            <span>
              <h1 className="text-2xl font-bold">Pick add-ons</h1>
              <p className="text-lg sm:text-sm text-gray-400">
                Add-ons help enhance your gaming experience.
              </p>
            </span>
            <div className="game-options grid gap-2 *:[&_p]:text-gray-400 font-bold [&_input]:accent-blue-700 sm:[&_label]:text-md [&_p]:text-sm [&_label]:flex [&_label]:justify-between">
              {items.map((addon) => (
                <div
                  key={addon.id}
                  className="online-service h-16 border-2 border-gray-300 flex justify-start items-center px-4 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900 "
                >
                  <input
                    type="checkbox"
                    id={addon.id}
                    checked={addons.includes(addon.id)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.checked) {
                        updateData({ addons: [...addons, addon.id] });
                      } else {
                        updateData({
                          addons: addons.filter((a) => a !== addon.id),
                        });
                      }
                    }}
                  />
                  <div className="ml-3">
                    <label htmlFor={addon.id}>{addon.name}</label>
                    <p>{addon.description}</p>
                  </div>
                  <p className="ml-auto">${addon.price[subscription.period]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bottom flex justify-between mt-5">
            <button
              type="button"
              className="text-gray-400 text-lg sm:block hidden cursor-pointer"
              onClick={onBack}
            >
              Go Back
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-950  text-gray-200 sm:block hidden font-bold py-2 px-3 rounded-lg cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
      <div className="bottom sm:hidden w-full flex justify-between p-5 font-bold">
        <button
          onClick={() => onBack()}
          type="button"
          className="text-gray-400 text-lg  cursor-pointer"
        >
          Go Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-950 m text-gray-200 py-3 px-4  rounded-lg cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
