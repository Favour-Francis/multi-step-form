import Step1 from "./Step1.tsx";
import Step2 from "./Step2.tsx";
import Step3 from "./Step3.tsx";
import Step4 from "./Step4.tsx";

import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";

import { useState } from "react";

export type Subscription = {
  image: string;
  plan: string;
  price:number;
}

export type FormData = {
  name: string;
  email: string;
  phone: string;
  billingPeriod: "monthly" | "yearly";
  subscriptions: {
    monthly: Subscription[];
    yearly: Subscription[]
  };
  
};



const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    billingPeriod: "yearly",
    subscriptions: {
      monthly: [
        { image: arcadeImg, plan: "Arcade", price: 9 },
        { image: advancedImg, plan: "Advanced", price: 12 },
        { image: proImg, plan: "Pro", price: 15 },
      ],
      yearly: [
        { image: arcadeImg, plan: "Arcade", price: 90 },
        { image: advancedImg, plan: "Advanced", price: 120 },
        { image: arcadeImg, plan: "Pro", price: 150 },
      ],
    },
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div>
      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} next={next} />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          next={next}
          back={back}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          next={next}
          back={back}
        />
      )}
      {step === 4 && <Step4 formData={formData} next={next} back={back} />}
    </div>
  );
};

export default MultiStepForm;
