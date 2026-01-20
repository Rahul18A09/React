import React, { useContext } from "react";
import { ThemeContext, } from "../App";

function ChildC() {
  // const user = useContext(UserContext)
  const theme = useContext(ThemeContext);

  return (
    <div>
      <button>Change Theme</button>
    </div>
  );
}

export default ChildC;
