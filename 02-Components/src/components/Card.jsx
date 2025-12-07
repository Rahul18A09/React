import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div>
      <div className="card">
        <img src={props.img} alt="img" />
        <h1>{props.user}</h1>
        <h2>I am {props.age} year old.</h2>
        <button>View More</button>
      </div>
    </div>
  );
};

export default Card;
