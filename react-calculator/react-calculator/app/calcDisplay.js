"use client";

import React, { useState, useEffect, useRef } from "react";
import { CalcPad } from "./buttons.js";
import { HistoryField } from "./history-field.js";
import { InputField } from "./input-field.js";
//import './index.css';

export default function CalcDisplay() {
  const [buttonPressed, setBPressed] = useState("");
  const [displayChar, setDisplayVar] = useState("");
  console.log("render Display\ndisplayChar: ", displayChar);
  //let displayChar = "";

  function backspacer(string) {
    let temp = string.replace(/backspace/g, "");
    temp = temp.substring(0, temp.length - 1);
    return temp;
  }

  function handleClick(char) {
    // displayChar = char;
    console.log("----------------------------------");
    console.log("WRITTEN: " + char); //display to InputField
    if (char == "backspace") {
      console.log("backed");
      let temp = backspacer(displayChar);
      console.log("temp is " + temp);
      setDisplayVar(temp);
    } else if (char != "") {
      setDisplayVar(displayChar + char);
    }
    setBPressed("");
  }

  function handleOnChange(e) {
    let temp = e.target.value;
    console.log("e.data: " + temp);
    setDisplayVar(temp);
    console.log("displayChar: " + `${displayChar}`);
  }

  return (
    <>
      <div className="bg-[#16161d] h-1/3 border-b-2  border-indigo-900">
        <div className="h-1/3 "></div>
        <input
          type="text"
          className="h-2/3 px-1.5 caret-pink-500 outline-none
          w-full text-end text-[20vh] leading-none bg-[#16161d] focus:border-transparent"
          value={displayChar}
          onChange={handleOnChange}
        />
      </div>
      <div className="h-2/3">
        <CalcPad onSquareClick={(val) => handleClick(val)} />
      </div>
    </>
  );
}

export { CalcDisplay };
