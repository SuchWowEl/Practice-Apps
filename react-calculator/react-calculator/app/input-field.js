"use client";

import React from "react";

export default function InputField({ buttonPressed, onMouseUp }) {
  return (
    <div className="bg-[#16161d] h-1/3 border-b-2  border-indigo-900">
      <div className="h-1/3 "></div>
      <input
        type="text"
        className="h-2/3 px-1.5 caret-pink-500 outline-none
          w-full text-end text-[20vh] leading-none bg-[#16161d] focus:border-transparent"
      />
    </div>
  );
}

export { InputField };
