"use client";

import React from "react";
//import './index.css';

// const History = () => {
//   //${isClicked && isHovered ? "text-gray-400" : "text-white"}
//   return ;
// };

export default function HistoryField({ buttonPressed, onMouseUp }) {
  //   buttonPressed={buttonPressed}
  //   setBPressed={handleOnMouseUp}
  return (
    <div className="bg-[#16161d] border-l-2 text-white border-indigo-900  w-1/5  h-full">
      <p className="text-xl text-indigo-500 w-full pl-2">History: </p>
    </div>
  );
}

export { HistoryField };
