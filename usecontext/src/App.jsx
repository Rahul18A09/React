// import React, { createContext, useState } from "react";
import "./App.css";
import { createContext, useState } from "react";
import ChildA from "./components/ChildA";

// const UserContext = createContext();

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Rahul"});

  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id="container" style={{backgroundColor:theme === "light" ? "beige" : "black"}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>

    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  );
}

export default App;
// export {UserContext}
export { ThemeContext };
