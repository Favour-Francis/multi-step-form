import { create } from "zustand";

export type IPersonalInformation = {
  name: string;
  email: string;
  phone: string;
};

export type ISubscriptionTypes = "arcade" | "advanced" | "pro";

export type ISubscriptionPeriods = "yearly" | "monthly";

// prettier-ignore
export type IAddons = "online-services" | "larger-storage"| "customizable-profile";

export type FormData = {
  personal: IPersonalInformation;
  subscription: {
    period: ISubscriptionPeriods;
    type: ISubscriptionTypes;
  };
  addons: IAddons[];
};

type State = {
  data: FormData;
  updateData: (updates: Partial<FormData>) => void;
};

const useGlobalStore = create<State>((set) => {
  return {
    data: {
      personal: {
        name: "",
        email: "",
        phone: "",
      },
      subscription: {
        period: "monthly",
        type: "arcade",
      },
      addons: [],
    },
    updateData: (updates: FormData) => {
      set((state) => ({
        ...state.data,
        data: { ...state.data, ...updates },
      }));
    },
  };
});

export default useGlobalStore;
