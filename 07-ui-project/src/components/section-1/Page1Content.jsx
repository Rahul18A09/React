import React from "react";
import LeftCotent from "./LeftCotent";
import RightContent from "./RightContent";


const Page1Content = () => {
  return (
    <div className="py-10 flex items-center gap-10 h-[90vh] bg-amber-950 px-18">
     <LeftCotent/>
     <RightContent/>
    </div>
  );
};

export default Page1Content;
