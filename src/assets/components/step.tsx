import { useState } from "react";

interface CounterProps {
  name: string;
}

const Step: React.FC<CounterProps> = ({ name }): JSX.Element => {
  const [step, setStep] = useState(1);

  return (
    // prettier-ignore
    <div className="flex gap-3 items-center border-2 rounded-md px-2 py-1 border-neutral-600 bg-neutral-800">
      <button className="pb-1 bg-neutral-700 w-6 h-6 flex items-center justify-center rounded-md hover:bg-[#383838] text-neutral-300 duration-200"
              onClick={() => setStep((step) => step - 1)}> - </button>

      <h1 className="text-xl text-neutral-300 font-semibold">{name}: {step}</h1>

      <button className="pb-1 bg-neutral-700 w-6 h-6 flex items-center justify-center rounded-md text-neutral-300 hover:bg-[#383838] duration-200"
              onClick={() => setStep((step) => step + 1)}> + </button>
    </div>
  );
};

export default Step;
