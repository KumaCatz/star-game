export const starReducerActions = {
  BUY_1_STAR: "BUY_1_STAR"
};

export function starReducer(state, action) {
  switch (action.type) {
    case starReducerActions.BUY_1_STAR:
      return state + 1;
    default:
      throw new Error();
  }
}
