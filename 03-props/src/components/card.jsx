import React from "react";

const card = (props) => {
    console.log(props);
    
  return (
    
      <div className="card">
        <img src={props.img} alt="leaf-img" />
        <h1>Hi, I am {props.user}</h1>
        <p>I am {props.age} year old.</p>
      </div>
  
  );
};

export default card;
