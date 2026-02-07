import { useForm } from "react-hook-form";
import useGlobalStore, { type IPersonalInformation } from "../store/global";
import "./App.css";

type Props = {
  onNext: () => void;
};

export default function PersonalInformation({ onNext }: Props) {
  const personal = useGlobalStore((state) => state.data.personal);
  const updateData = useGlobalStore((state) => state.updateData);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IPersonalInformation>({
    defaultValues: {
      name: personal.name,
      email: personal.email,
      phone: personal.phone,
    },
  });

  const onSubmit = (values: IPersonalInformation) => {
    updateData({ personal: values });
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container sm:max-w-[calc(1050px)] sm:bg-white grid sm:grid-cols-[0.5fr_1fr] sm:justify-between justify-center sm:gap-10 sm:p-3 sm:rounded-xl"
    >
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
                {!!errors?.name?.message && (
                  <p className="text-red-700 text-sm tracking-tighter">
                    {errors?.name?.message}
                  </p>
                )}
              </label>
              <input
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                className="border-2 border-gray-300 h-9 rounded-lg my-1 p-3"
                {...register("name", { required: "Please enter your name" })}
              />
            </div>
            <div className="grid my-1">
              <label htmlFor="email">
                Email Address{" "}
                {!!errors?.email?.message && (
                  <p className="text-red-700 text-sm tracking-tighter">
                    {errors?.email?.message}
                  </p>
                )}
              </label>
              <input
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                id="email"
                {...register("email", {
                  required: "Please enter your email address",
                })}
                className="border-2 border-gray-300 h-9 rounded-lg my-1 p-3"
              />
            </div>
            <div className="grid">
              <label htmlFor="phone">
                Phone Number
                {!!errors?.phone?.message && (
                  <p className="text-red-700 text-sm tracking-tighter">
                    {errors?.phone?.message}
                  </p>
                )}
              </label>
              <input
                type="number"
                id="phone"
                placeholder="e.g. +1 234 567 890"
                {...register("phone", {
                  required: "Please enter your phone number",
                })}
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
