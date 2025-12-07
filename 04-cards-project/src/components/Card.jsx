import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {

  // console.log(props.company);
 
  
  
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src={props.brandLogo}
            alt="logo"
          />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>

        <div className="center">
          <h2>
            {props.company} <span>{props.datePosted}</span>
          </h2>
          <h3>{props.post}</h3>

          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
