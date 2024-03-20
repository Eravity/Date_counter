import React, { useState } from "react";

const Step: React.FC = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const dateFormatter = new Intl.DateTimeFormat("default", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedDate = dateFormatter
    .format(date)
    .replace(/(\d+)\/(\d+)\/(\d+)/, "$2/$1/$3");

  return (
    <>
      <div className="flex gap-3 items-center border-2 rounded-md px-2 py-1 border-neutral-600 bg-neutral-800">
        <button
          className="pb-1 bg-neutral-700 w-6 h-6 flex items-center justify-center rounded-md hover:bg-[#383838] text-neutral-300 duration-200"
          onClick={() => setStep((step) => step - 1)}
        >
          -
        </button>

        <h1 className="text-xl text-neutral-300 font-semibold">Step: {step}</h1>

        <button
          className="pb-1 bg-neutral-700 w-6 h-6 flex items-center justify-center rounded-md text-neutral-300 hover:bg-[#383838] duration-200"
          onClick={() => setStep((step) => step + 1)}
        >
          +
        </button>
      </div>
      <p className="text-xl text-neutral-400">{formattedDate}</p>

      <div className="flex gap-3 items-center border-2 rounded-md px-2 py-1 border-neutral-600 bg-neutral-800">
        <button
          className="pb-1 bg-neutral-700 w-6 h-6 flex items-center justify-center rounded-md hover:bg-[#383838] text-neutral-300 duration-200"
          onClick={() => setCount((count) => count - step)}
        >
          -
        </button>

        <h1 className="text-xl text-neutral-300 font-semibold">
          count: {Math.abs(count)} days {count < 0 && "ago"}
        </h1>

        <button
          className="pb-1 bg-neutral-700 w-6 h-6 flex items-center justify-center rounded-md text-neutral-300 hover:bg-[#383838] duration-200"
          onClick={() => setCount((count) => count + step)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Step;
