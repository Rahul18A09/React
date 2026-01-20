// import React, { createContext, useState } from "react";


import { createContext, useState } from "react";
import ChildA from "./components/ChildA";

// const UserContext = createContext();

const  ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Rahul"});

  const [theme, setTheme] = useState("light");
  return (


<ThemeContext.Provider value={theme}>
  <ChildA/>
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
export {ThemeContext} 
