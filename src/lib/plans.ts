import type { ISubscriptionTypes } from "../store/global";

export type IPlan = {
  id: ISubscriptionTypes;
  name: string;
  image: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

const plans: IPlan[] = [
  {
    id: "arcade",
    name: "Arcade",
    image: "images/icon-arcade.svg",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    id: "advanced",
    name: "Advanced",
    image: "images/icon-advanced.svg",
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    id: "pro",
    name: "Pro",
    image: "images/icon-pro.svg",
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];

export default plans;
