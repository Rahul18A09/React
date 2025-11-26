import React from "react";
import Card from "./components/Card"

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Rahul Bharada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          dignissimos.
        </p>
      </div>

      {Card()}
    </div>
  );
};

export default App;
