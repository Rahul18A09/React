import React, { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import "./App.css";

//step1: create Context
export const UserContext = createContext();

// step2: wrap all the child inside a probider
// step3: pass value
// step4: consumer ke under jake consume karlo

export const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"Rahul"});
  const [theme, setTheme] = useState("light");
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>

    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  );
}

export default App;
