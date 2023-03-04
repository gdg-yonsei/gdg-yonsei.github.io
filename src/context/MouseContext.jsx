import { createContext, useState } from 'react';

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => {},
});

function MouseContextProvider(props) {
  const [cursorType, setCursorType] = useState('');

  const handleCursorChange = (newType) => {
    setCursorType(newType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: handleCursorChange,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
}

export default MouseContextProvider;
