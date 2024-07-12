import { useState } from "react";

const MIN = 1;

const useStepper = () => {
  const [step, setStep] = useState(MIN);

  const nextStep = () => setStep((step) => step + 1);

  const prevStep = () => {
    if (step > MIN) {
      setStep((step) => step - 1);
    }
  };

  const resetStep = () => setStep(MIN);

  return [step, { setStep, nextStep, prevStep, resetStep }] as const;
};

export default useStepper;
