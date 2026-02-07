import PersonalInformation from "./PersonalInformation.tsx";
import SelectPlan from "./SelectPlan.tsx";
import PickAddons from "./PickAddons.tsx";
import Summary from "./Summary.tsx";
import { useState } from "react";
import Stepper from "./Stepper.tsx";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="grid grid-cols-[1fr_2fr]">
      <Stepper />
      {step === 1 && <PersonalInformation onNext={next} />}
      {step === 2 && <SelectPlan onNext={next} onBack={back} />}
      {step === 3 && <PickAddons onNext={next} onBack={back} />}
      {step === 4 && <Summary onNext={next} onBack={back} />}
    </div>
  );
};

export default MultiStepForm;
