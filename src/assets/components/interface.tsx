import React from "react";

// Components
import Counter from "./counter";

const Interface: React.FC = (): JSX.Element => {
  return (
    <div className="flex gap-5 items-center"> 
      <Counter />
    </div>
  );
};

export default Interface;
