import React from "react";
import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
            alt="logo"
          />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>

        <div className="center">
          <h2>
            Amazon <span>% days ago</span>
          </h2>
          <h3>Senior UI/UX Designer</h3>

          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
