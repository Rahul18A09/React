import React, { createContext, useContext } from "react";

const UserContext = createContext();

function App1() {
  const user = { name: "Rahul" };

  return (
    <>
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

function Profile() {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>My name is {user.name}</h1>
        </div>
    )
}

export default App1;
export { Profile };
