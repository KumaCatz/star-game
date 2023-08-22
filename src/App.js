import "./styles.css";
import BuyStar from "./components/BuyStar";
import Stars from "./components/Stars";
import { StarContext, StarReducerContext } from "./contexts/StarsContext";
import { useReducer } from "react";
import { starReducer } from "./reducers/starReducer";

export default function App() {
  const [stars, dispatch] = useReducer(starReducer, 0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <StarContext.Provider value={{ stars }}>
        <StarReducerContext.Provider value={{ dispatch }}>
          <Stars />
          <BuyStar />
        </StarReducerContext.Provider>
      </StarContext.Provider>
    </div>
  );
}

/**
 *
 * Deployed Sample : https://vwkqv.csb.app/
 * (dont open the sandbox and copy the code)
 *
 * Task 1
 * - Render a headline stating the number of stars
 * - Render a button that increases stars by 1 per click
 *
 * Task 2
 * - Render the number of multipliers a player has
 * - Render a button to increase the multipler
 * - Purchasing a multipler should cost stars
 * - Only render option to buy if there are enoguh stars to purchase
 * - Only render number of multipliers if some are purchased
 *
 * Task 3
 * - Add a mult-clicker option that acts as an additional multipler
 * - The same display rules as for multplier should apply
 *
 * Task 4
 * - Add a more better clicker option that acts as another additional multipler
 * - The same display rules as for multplier should apply
 *
 *
 * Bonus Tasks
 *  (in no order, do them as you would like)
 * - clean up the app by creating reusable components
 * - change naming to make the game your own
 * - add options to buy more than 1 multiplers at once (5, 10, 100 and max)
 * - add an auto clicker functionailty
 * - add more multipliers
 * - add an automatic upgrade purchaser
 * - add a option to spend all the stars you have on different updgrades
 * - add some style
 *
 * */
