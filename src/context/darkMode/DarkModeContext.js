import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import DarkModeReducer from './DarkModeReducer';
import { getFromStorage, setToStorage } from 'utils';
import { DARK, LIGHT, TOGGLE } from './DarkModeTypes';

const darkMode = getFromStorage('darkMode');

const INITIAL_STATE = {
  darkMode: darkMode ?? true,
};

const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  const dark = () => {
    dispatch({
      type: DARK,
    });
  };

  const light = () => {
    dispatch({
      type: LIGHT,
    });
  };

  const toggle = () => {
    dispatch({
      type: TOGGLE,
    });
  };

  useEffect(() => {
    setToStorage('darkMode', state.darkMode);
  }, [state]);

  return (
    <DarkModeContext.Provider value={{ ...state, dark, light, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(DarkModeContext);
};

export default DarkModeProvider;
