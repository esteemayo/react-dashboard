import { createContext, useContext, useReducer } from 'react';
import DarkModeReducer from './DarkModeReducer';

const INITIAL_STATE = {
  darkMode: true,
};

const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return <DarkModeContext.Provider>{children}</DarkModeContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(DarkModeContext);
};

export default DarkModeProvider;
