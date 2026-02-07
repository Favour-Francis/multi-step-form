const Stepper = () => {
  return (
    <div className="relative size-full flex justify-center sm:justify-start">
      <img
        className="sm:hidden w-screen h-full"
        src="/images/bg-sidebar-mobile.svg"
        alt="side bar"
      />
      <div className="sm:block hidden w-fit ">
        <img className="" src="/images/bg-sidebar-desktop.svg" alt="side bar" />
      </div>
      <div className="steps ml-5 text-white text-xs mt-10 flex absolute sm:flex-col gap-5 sm:rounded-xl ">
        <div className="flex items-center gap-2 ">
          <div className="bg-blue-500 text-black font-bold px-4.5 py-3 sm:px-3 sm:py-1.5 rounded-full">
            1{" "}
          </div>
          <div className="hidden sm:block">
            <span>
              <h1 className="text-xs text-gray-400 tracking-tighter">STEP 1</h1>
              <p className="text-gray-200 text-xs font-bold">YOUR INFO</p>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <span className="border border-gray-300 font-bold px-4 py-2.5 sm:px-2.5 sm:py-1 rounded-full">
              2{" "}
            </span>
          </div>
          <div className="hidden sm:block">
            <span>
              <h1 className="text-xs text-gray-400 tracking-tighter">STEP 2</h1>
              <p className="text-gray-200 text-xs font-bold">SELECT PLAN</p>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <span className="border border-gray-300 font-bold px-4 py-2.5 sm:px-2.5 sm:py-1 rounded-full">
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
  );
};

export default Stepper;
