import "./App.css";
import sideImgD from "../assets/images/bg-sidebar-desktop.svg";
import sideImgM from "../assets/images/bg-sidebar-mobile.svg";

import { useState } from "react";

type Props = {
  formData: any;
  setFormData: any;
  next: () => void;
  back: () => void;
};

export default function Step2({ formData, setFormData, next, back }: Props) {
  const [isYearly, setIsYearly] = useState(formData.billingPeriod === "yearly");

  const monthlyPlan = formData.subscriptions.monthly;
  const yearlyPlan = formData.subscriptions.yearly;


  console.log(formData)

  const handleNext = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.selectedPlan) return;
    next();
  };

  return (
    <form
      onSubmit={handleNext}
      className="container sm:max-w-[calc(1050px)] sm:bg-white grid sm:grid-cols-[0.5fr_1fr] sm:justify-between justify-center sm:gap-15 sm:p-3 sm:rounded-xl"
    >
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
              <span className="bg-blue-500 text-black font-bold px-4.5 py-3 sm:px-3 sm:py-1.5 rounded-full">
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
        <div className="bg-white w-110 sm:p-0 p-8 text-blue-950 sm:grid justify-between sm:gap-2 rounded-xl">
          <div className="top sm:mb-13 *:my-5 sm:*:my-5">
            <span>
              <h1 className="text-2xl font-bold">Select your plan</h1>
              <p className="sm:text-sm text-md text-gray-400">
                You have the option of monthly or yearly billing.
              </p>
            </span>

            {isYearly && (
              <div className="game-options grid sm:grid-cols-[1fr_1fr_1fr] sm:gap-3 gap-2.5 font-semibold ">
                {monthlyPlan.map((mPlan: any) => (
                  <div
                    key={mPlan.id}
                    className={`arcade sm:w-28 sm:h-35 h-20 sm:grid flex items-center sm:*:ml-3 *:ml-4 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900
                    ${formData.selectedPlan?.plan === mPlan.plan ? "border border-blue-950 bg-gray-200" : "border-2 border-gray-300"}`}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        selectedPlan: mPlan,
                      });
                    }}
                  >
                    <img
                      className="size-9 rounded-full"
                      src={mPlan.image}
                      alt="arcade"
                    />
                    <span>
                      <h1 className="font-bold">{mPlan.plan}</h1>
                      <p className="text-sm text-gray-400">${mPlan.price}/mo</p>
                    </span>
                  </div>
                ))}
                {/*                 
                <div className="advanced sm:w-28 sm:h-35 h-20 border-2 border-gray-300 sm:grid flex  items-center sm:*:ml-3 *:ml-4  rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900">
                  <img src={advancedImg} alt="arcade" />
                  <span>
                    <h1 className="font-bold">Advance</h1>
                    <p className=" text-sm text-gray-400 ">$12/mo</p>
                  </span>
                </div>
                <div className="pro sm:w-28 sm:h-35 h-20 border-2 border-gray-300 sm:grid flex  items-center sm:*:ml-3 *:ml-4 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900">
                  <img src={proImg} alt="arcade" />
                  <span>
                    <h1 className="font-bold">Pro</h1>
                    <p className=" text-sm text-gray-400">$15/mo</p>
                  </span>
                </div> */}
              </div>
            )}
            {!isYearly && (
              <div className="game-options grid sm:grid-cols-[1fr_1fr_1fr] sm:gap-3 gap-2.5 font-bold ">
                {yearlyPlan.map((yPlan: any) => (
                  <div
                    key={yPlan.id}
                    className={`arcade sm:w-28 sm:h-35 h-20 sm:grid flex items-center sm:*:ml-3 *:ml-4  rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900 
                    ${formData.selectedPlan?.plan === yPlan.plan ? "border border-blue-950 bg-gray-200" : "border-2 border-gray-300"}`}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        selectedPlan: yPlan,
                      });
                    }}
                  >
                    <img
                      className="size-9 rounded-full"
                      src={yPlan.image}
                      alt="arcade"
                    />
                    <span>
                      <h1 className="font-bold">{yPlan.plan}</h1>
                      <span>
                        <p className="font-semibold text-sm text-gray-400">
                          ${yPlan.price}/yr
                        </p>
                        <p className="text-xs tracking-tight">2 months free</p>
                      </span>
                    </span>
                  </div>
                ))}
                {/* <div className="advanced sm:w-28 sm:h-35 h-20 border-2 border-gray-300 sm:grid flex  items-center sm:*:ml-3 *:ml-4  rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900">
                  <img src={advancedImg} alt="arcade" />
                  <span>
                    <h1 className="font-bold">Adavance</h1>
                    <p className="font-semibold text-sm text-gray-400">
                      $120/yr
                    </p>
                    <p className="text-xs tracking-tight">2 months free</p>
                  </span>
                </div>
                <div className="pro sm:w-28 sm:h-35 h-20 border-2 border-gray-300 sm:grid flex  items-center sm:*:ml-3 *:ml-4 rounded-lg cursor-pointer hover:bg-gray-200 hover:border hover:border-blue-900">
                  <img src={proImg} alt="arcade" />
                  <span>
                    <h1 className="font-bold">Pro</h1>
                    <p className="font-semibold text-sm text-gray-400">
                      $150/yr
                    </p>
                    <p className="text-xs text-blue-950 tracking-tight">
                      2 months free
                    </p>
                  </span>
                </div> */}
              </div>
            )}

            <div className="period-options bg-gray-100 rounded-lg flex justify-center items-center gap-5 p-3 font-semibold">
              <span className={!isYearly ? "text-gray-400" : "text-blue-950"}>
                Monthly
              </span>
              <div
                className="bg-blue-950 w-9 h-4.5 px-0.5 rounded-full flex items-center cursor-pointer"
                onClick={() => {
                  setIsYearly(!isYearly);
                  setFormData({
                    ...formData,
                    billingPeriod: !isYearly ? "yearly" : "monthly",
                  });
                }}
              >
                <span
                  className={
                    isYearly
                      ? "bg-white size-3 rounded-full"
                      : "bg-white size-3 rounded-full ml-5"
                  }
                ></span>
              </div>
              <span className={isYearly ? "text-gray-400" : " text-blue-950"}>
                Yearly
              </span>
            </div>
          </div>

          <div className="bottom flex justify-between font-bold">
            <button
              type="button"
              onClick={back}
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
          onClick={back}
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
