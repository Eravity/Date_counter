import React from "react";

// Components
import Interface from "./assets/components/interface";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="h-screen flex gap-5 justify-center items-center">
      <Interface/>
    </div>
  );
};

export default App;
