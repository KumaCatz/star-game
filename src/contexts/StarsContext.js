import { createContext } from "react";

export const StarContext = createContext({
  stars: 0
});

export const StarReducerContext = createContext({
  dispatch: () => {}
});
