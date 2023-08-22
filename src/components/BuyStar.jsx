import { useContext } from "react";
import { StarReducerContext } from "../contexts/StarsContext";
import { starReducerActions } from "../reducers/starReducer";

function BuyStar() {
  const { dispatch } = useContext(StarReducerContext);

  return (
    <button onClick={() => dispatch({ type: starReducerActions.BUY_1_STAR })}>
      Buy Star
    </button>
  );
}

export default BuyStar;
