import { createContext, useContext, useReducer } from 'react';
import DarkModeReducer from './DarkModeReducer';
import { DARK } from './DarkModeTypes';

const INITIAL_STATE = {
  darkMode: true,
};

const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  const dark = () => {
    dispatch({
      type: DARK,
    });
  };

  return (
    <DarkModeContext.Provider value={{ ...state }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(DarkModeContext);
};

export default DarkModeProvider;
