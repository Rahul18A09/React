import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Rahul"
        age="25"
        img="https://plus.unsplash.com/premium_photo-1763482110336-afe8d4ac0bac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
      />
      <Card user="asha" age="24" img="https://images.unsplash.com/photo-1763986668655-413d55a24f6a?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="asha" age="24" img="https://images.unsplash.com/photo-1757710436034-f1d7372ec1be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
    </div>
  );
};

export default App;
