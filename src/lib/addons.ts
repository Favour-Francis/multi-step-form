import type { IAddons } from "../store/global";

type IAddonItem = {
  id: IAddons;
  name: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
};

const addons: IAddonItem[] = [
  {
    id: "online-services",
    name: "Online Services",
    description: "Access to multiplayer games",
    price: {
      monthly: "1/mo",
      yearly: "10/yr",
    },
  },
  {
    id: "larger-storage",
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: {
      monthly: "2/mo",
      yearly: "20/yr",
    },
  },
  {
    id: "customizable-profile",
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: {
      monthly: "2/mo",
      yearly: "20/yr",
    },
  },
];

export default addons;
