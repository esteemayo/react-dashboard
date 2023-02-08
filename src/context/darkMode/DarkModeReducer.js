import { DARK, LIGHT, TOGGLE } from './DarkModeTypes';

const DarkModeReducer = (state, { payload, type }) => {
  switch (type) {
    case DARK:
      return {
        ...state,
        darkMode: true,
      };

    case LIGHT:
      return {
        ...state,
        darkMode: false,
      };

    case TOGGLE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};

export default DarkModeReducer;
