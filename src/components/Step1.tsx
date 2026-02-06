import "./App.css";
import sideImgD from "../assets/images/bg-sidebar-desktop.svg";
import sideImgM from "../assets/images/bg-sidebar-mobile.svg";
import { useState } from "react";

type Props = {
  formData: any;
  setFormData: any;
  next: () => void;
};

export default function Step1({ formData, setFormData, next }: Props) {
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const handleNext = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name) {
      setNameError("This field is required");
      return;
    }
    if (formData.name && formData.name.length < 3) {
      setNameError("Enter valid name");
      return;
    }

    if (!formData.email) {
      setEmailError("This field is required");
      return;
    }
    if (
      formData.email &&
      !formData.email.includes("@") &&
      !formData.email.includes(".")
    ) {
      setEmailError("Enter valid email address");
      return;
    }
    if (!formData.phone) {
      setPhoneError("This field is required");
      return;
    }
    if (formData.phone.length > 14 || formData.phone.toString().length < 9) {
      setPhoneError("Enter valid phone number");
      return;
    }

    console.log(formData)

    next();
  };

  return (
    <form
      onSubmit={handleNext}
      className="container sm:max-w-[calc(1050px)] sm:bg-white grid sm:grid-cols-[0.5fr_1fr] sm:justify-between justify-center sm:gap-10 sm:p-3 sm:rounded-xl"
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
            <div className="bg-blue-500 text-black font-bold px-4.5 py-3 sm:px-3 sm:py-1.5 rounded-full">
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

      <div className="form min-w-full transform sm:translate-0 -translate-y-24 flex sm:flex-col flex-row-2 sm:justify-end justify-center items-center ">
        <div className="bg-white w-110 sm:p-0 p-8 text-blue-950 sm:grid justify-between font-semibold rounded-xl sm:[&_label]:text-sm [&_label]:flex  [&_label]:justify-between">
          <div className="top mb-22">
            <span>
              <h1 className="text-2xl font-bold">Personal Info</h1>
              <p className="sm:text-sm text-lg text-gray-500">
                Please provide your name, email address, and phone number.
              </p>
            </span>
            <div className="grid mt-4">
              <label htmlFor="name">
                Name{" "}
                <p className="text-red-700 text-sm tracking-tighter">
                  {nameError}
                </p>
              </label>
              <input
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setNameError("");
                }}
                className="border-2 border-gray-300 h-9 rounded-lg my-1 p-3"
              />
            </div>
            <div className="grid my-1">
              <label htmlFor="email">
                Email Address{" "}
                <p className="text-red-700 text-sm tracking-tighter">
                  {emailError}
                </p>
              </label>
              <input
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setEmailError("");
                }}
                className="border-2 border-gray-300 h-9 rounded-lg my-1 p-3"
              />
            </div>
            <div className="grid">
              <label htmlFor="phone">
                Phone Number
                <p className="text-red-700 text-sm tracking-tighter">
                  {phoneError}
                </p>
              </label>
              <input
                type="number"
                id="phone"
                placeholder="e.g. +1 234 567 890"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone:(e.target.value) });
                  setPhoneError("");
                }}
                className="border-2 border-gray-300 h-9 rounded-lg my-1 p-3"
              />
            </div>
          </div>

          <div className="bottom flex justify-end">
            <button
              type="submit"
              className="bg-blue-950 sm:block hidden text-gray-200 font-bold py-2 px-3 rounded-lg cursor-pointer"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>

      <div className="bottom sm:hidden w-full flex justify-end p-5">
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
