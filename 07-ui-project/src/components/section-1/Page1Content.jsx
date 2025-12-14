import React from "react";
import LeftCotent from "./LeftCotent";
import RightContent from "./RightContent";


const Page1Content = (props) => {
  return (
    <div className="py-10 flex items-center gap-10 h-[90vh]">
     <LeftCotent/>
     <RightContent users={props.users}/>
    </div>
  );
};

export default Page1Content;
