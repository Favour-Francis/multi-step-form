import "../components/App.css";
import sideImgD from "../assets/images/bg-sidebar-desktop.svg";
import sideImgM from "../assets/images/bg-sidebar-mobile.svg";

type Props = {
  formData: any;
  next: () => void;
  back: () => void
}

export default function Step4({ formData, setFormData, next, back}:Props) {

  return (
    <form className="container sm:max-w-[calc(1050px)] sm:bg-white grid sm:grid-cols-[0.5fr_1fr] sm:justify-between justify-center sm:gap-15 sm:p-3 sm:rounded-xl">
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
              <span className="border border-gray-300 font-bold px-4 py-2.5 sm:px-2.5 sm:py-1 rounded-full">
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
              <span className="bg-blue-500 text-black font-bold px-4.5 py-3 sm:px-3 sm:py-1.5 rounded-full">
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
                  <h1 className="text-md font-bold">Arcade("period")</h1>
                  <a className="underline text-sm text-blue-700 cursor-pointer">Change</a>
                </span>
                <span className="font-bold">+$9/mo</span>
              </div>
              <div className="text-md p-3 text-gray-400 [&_p]:text-blue-950">
                <span className="flex justify-between">
                  Online service<p>+$1/mo</p>
                </span>
                <span className="flex justify-between mt-2">
                  Larger storage<p>+$2/mo</p>
                </span>
              </div>
            </div>
          </div>

          <div className="bottom flex justify-between mt-15">
            <button
              type="button"
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
        <button type="button" className="text-gray-400 text-lg  cursor-pointer">
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
