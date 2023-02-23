import { createContext, useState } from "react";

export const TransitionColorContext = createContext({
  transitionColor: "",
  transitionColorHandler: () => {},
});

function TransitionColorProvider({ children }) {
  const [transitionColor, setTransitionColor] = useState("");

  const handleTransitionColor = (newColor) => {
    setTransitionColor(newColor);
  };

  return (
    <TransitionColorContext.Provider
      value={{
        transitionColor: transitionColor,
        transitionColorHandler: handleTransitionColor,
      }}
    >
      {children}
    </TransitionColorContext.Provider>
  );
}

export default TransitionColorProvider;
