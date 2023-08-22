import { useContext } from "react";
import { StarContext } from "../contexts/StarsContext";

function Stars() {
  const { stars } = useContext(StarContext);

  return <div style={{ marginBottom: "15px" }}>Stars: {stars}</div>;
}

export default Stars;
