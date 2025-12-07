import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const user = "Rahul";
  const age = 25;
  return (
    <div>
      <Navbar/>
      <Navbar/>
      <Card/>
      <Card/>
    </div>
  );
};

export default App;