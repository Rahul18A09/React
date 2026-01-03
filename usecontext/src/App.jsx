import React, { createContext, useState } from "react";
import ChildA from "./components/ChildA";


//step1: create Context
export const UserContext = createContext();

// step2: wrap all the child inside a probider
// step3: pass value
// step4: consumer ke under jake consume karlo

function App() {

  const [user, setUser] = useState({name:"Rahul"});
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
