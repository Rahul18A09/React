import React, { useContext } from "react";
import { ThemeContext, } from "../App";

function ChildC() {
  // const user = useContext(UserContext)
  const {theme, setTheme} = useContext(ThemeContext);

  function ToggleTheme(){

    if(theme === "light")
        setTheme("dark")
    else
        setTheme("light")

  }


  return (
    <div>
      <button onClick={ToggleTheme}>Change Theme</button>
    </div>
  );
}

export default ChildC;
