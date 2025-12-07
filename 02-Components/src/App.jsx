import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="parent">
      <div>
        <Card
          user="Rahul"
          age="25"
          img="https://images.unsplash.com/photo-1764968351728-4b2938f56873?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div>
        <Card
          user="Rahul"
          age="25"
          img="https://images.unsplash.com/photo-1764968351728-4b2938f56873?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default App;
