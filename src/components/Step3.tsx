import "../components/App.css";
import sideImgD from "../assets/images/bg-sidebar-desktop.svg";
import sideImgM from "../assets/images/bg-sidebar-mobile.svg";

type Props = {
  formData: any;
  setFormData: any;
  next: () => void;
  back: () => void;
}



export default function Step2({ formData, setFormData, next, back}: Props) {
   
  
  const handleNext = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    next()
  }
  

  return (
    <form onSubmit={handleNext} className="container sm:max-w-[calc(1050px)] sm:bg-white grid sm:grid-cols-[0.5fr_1fr] sm:justify-between justify-center sm:gap-15 sm:p-3 sm:rounded-xl">
      <div className="relative size-full flex justify-center sm:justify-start">
        <img
          className="sm:hidden w-screen h-full"
          src={sideImgM}
          alt="side bar"
        />
        <div className="sm:block hidden w-fit ">
          {" "}
          <img className="" src={sideImgD} alt="side bar" />
        </div>
        <div className="steps ml-5 text-white text-xs mt-10 flex absolute sm:flex-col gap-5 sm:rounded-xl ">
          <div className="flex items-center gap-2 ">
            <div className=" border border-gray-300 font-bold px-4 py-2.5 sm:px-2.5 sm:py-1 rounded-full">
              {" "}
              1{" "}
            </div>
            <div className="hidden sm:block">
              <span>
                <h1 className="text-xs text-gray-400 tracking-tighter">
                  STEP 1
                </h1>
                <p className="text-gray-200 text-xs font-bold">YOUR INFO</p>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <span className="border border-gray-300 font-bold px-4 py-2.5 sm:px-2.5 sm:py-1 rounded-full">
                {" "}
                2{" "}
              </span>
            </div>
            <div className="hidden sm:block">
              <span>
                <h1 className="text-xs text-gray-400 tracking-tighter">
                  STEP 2
                </h1>
                <p className="text-gray-200 text-xs font-bold">SELECT PLAN</p>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <span className="bg-blue-500 text-black font-bold px-4.5 py-3 sm:px-3 sm:py-1.5 rounded-full">
                {" "}
                3{" "}
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xs text-gray-400 tracking-tighter">STEP 3</h1>
              <p className="text-gray-200 text-xs font-bold">ADD-ONS</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <span className="border border-gray-300 font-bold px-4 py-2.5 sm:px-2.5 sm:py-1 rounded-full">
                {" "}
                4{" "}
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xs text-gray-400 tracking-tighter">STEP 4</h1>
              <p className="text-gray-200 text-xs font-bold">SUMMARY</p>
            </div>
          </div>
        </div>
      </div>

      <div className="form min-w-full transform sm:translate-0 -translate-y-24 flex sm:flex-col justify-center items-center ">
        <div className="bg-white w-110  sm:p-0 p-8 text-blue-950 sm:grid justify-between font-semibold rounded-xl ">
          <div className="top *:my-5 sm:*:my-5">
            <span>
              <h1 className="text-2xl font-bold">Pick add-ons</h1>
              <p className="text-lg sm:text-sm text-gray-400">
                Add-ons help enhance your gaming experience.
              </p>
            </span>

            {isYearly && (
              <div className="game-options grid gap-2 *:[&_p]:text-gray-400 font-bold [&_input]:accent-blue-700 sm:[&_label]:text-md [&_p]:text-sm [&_label]:flex [&_label]:justify-between">
                <div className="online-service h-16 border-2 border-gray-300 flex justify-between items-center sm:*:ml-3 *:ml-4 px-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900 ">
                  <input type="checkbox" id="online-service" />
                  <div className="*:-ml-5">
                    <label htmlFor="online-service">Online service</label>
                    <p>Access to multiplayer games</p>
                  </div>
                  <p>+$1/mo</p>
                </div>
                <div className="larger-storage h-16 border-2 border-gray-300 flex justify-between items-center sm:*:ml-3 *:ml-4 px-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900">
                  <input type="checkbox" id="larger-storage" />
                  <div className="*:-ml-12 ">
                    <label htmlFor="larger-storage">Larger storage</label>
                    <p>Extra 1TB of cloud save</p>
                  </div>
                  <p>+$2/mo</p>
                </div>
                <div className="customize-profile h-16 border-2 border-gray-300 flex justify-between items-center sm:*:mx-3 *:ml-4 pl-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900">
                  <input type="checkbox" id="customize-profile" />
                  <div className="*:mr-2">
                    <label htmlFor="customize-profile">
                      Customizable profile
                    </label>
                    <p>Custom theme on your profile</p>
                  </div>
                  <p className="mr-2">+$2/mo</p>
                </div>
              </div>
            )}
            {!isYearly && (
              <div className="game-options grid gap-2 *:[&_p]:text-gray-400 font-bold [&_input]:accent-blue-700 sm:[&_label]:text-md [&_p]:text-sm [&_label]:flex [&_label]:justify-between">
                <div className="online-service h-16 border-2 border-gray-300 flex justify-between items-center sm:*:ml-3 *:ml-4 px-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900 ">
                  <input type="checkbox" id="online-service" />
                  <div className="*:-ml-5">
                    <label htmlFor="online-service">Online service</label>
                    <p>Access to multiplayer games</p>
                  </div>
                  <p>+$10/yr</p>
                </div>
                <div className="larger-storage h-16 border-2 border-gray-300 flex justify-between items-center sm:*:ml-3 *:ml-4 px-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900">
                  <input type="checkbox" id="larger-storage" />
                  <div className="*:-ml-12 ">
                    <label htmlFor="larger-storage">Larger storage</label>
                    <p>Extra 1TB of cloud save</p>
                  </div>
                  <p>+$20/yr</p>
                </div>
                <div className="customize-profile h-16 border-2 border-gray-300 flex justify-between items-center sm:*:mx-3 *:ml-4 pl-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900">
                  <input type="checkbox" id="customize-profile" />
                  <div className="*:mr-2">
                    <label htmlFor="customize-profile">
                      Customizable profile
                    </label>
                    <p>Custom theme on your profile</p>
                  </div>
                  <p className="mr-2">+$20/yr</p>
                </div>
              </div>
            )}

          </div>
          <div className="bottom flex justify-between mt-5">
            <button
              type="button"
              className="text-gray-400 text-lg sm:block hidden cursor-pointer"
              onClick={() => navigate("/step2")}
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
          onClick={() => navigate("/step2")}
          type="button"
          className="text-gray-400 text-lg  cursor-pointer"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-blue-950 m text-gray-200 py-3 px-4  rounded-lg cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
