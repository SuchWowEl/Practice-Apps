"use client";

import React, { useState, useEffect, useRef } from "react";
import { CalcPad } from "./buttons.js";
import { HistoryField } from "./history-field.js";
import { InputField } from "./input-field.js";
//import './index.css';

export default function CalcDisplay() {
  //const [buttonPressed, setBPressed] = useState("");
  const [highDisplay, setHigh] = useState("");
  const [lowDisplay, setLow] = useState("");
  console.log(
    "render Display\nlowDisplay: " +
      lowDisplay +
      "\nhighDisplay: " +
      highDisplay
  );
  //let lowDisplay = "";

  function backspacer(string) {
    let temp = string.replace(/backspace/g, "");
    temp = temp.substring(0, temp.length - 1);
    return temp;
  }

  function numberHandler(char) {
    // lowDisplay = char;
    console.log("----------------------------------");
    console.log("WRITTEN: " + char); //display to InputField
    if (char == "+/-") {
      console.log("change sign");
      setLow((prev) => (lowDisplay[0] == "-" ? prev.slice(1) : "-" + prev));
    } else if (char == ".") {
      if (!lowDisplay.includes(".")) setLow((prev) => prev + ".");
      //setLow((prev) => (lowDisplay.includes(".") ? prev.slice(1) : "-" + prev));
    } else if (char != "") {
      setLow(lowDisplay + char);
    }
    //setBPressed("");
  }

  function operationHandler(char) {
    if (char == "backspace") {
      console.log("backed");
      let temp = backspacer(lowDisplay);
      console.log("temp is " + temp);
      setLow(temp);
    } else if (char == "C") {
      setHigh("");
      setLow("");
    } else {
      setHigh((displayedHigh) => displayedHigh + char);
    }
  }

  function handleOnChange(e) {
    let temp = e.target.value;
    console.log("e.data: " + temp);
    setLow(temp);
    console.log("lowDisplay: " + `${lowDisplay}`);
  }

  return (
    <>
      <div className="bg-[#16161d] h-1/3 border-b-2  border-indigo-900">
        <div className="h-1/3 text-right">{highDisplay}</div>
        <input
          type="text"
          className="h-2/3 px-1.5 caret-pink-500 outline-none
          w-full text-end text-[20vh] leading-none bg-[#16161d] focus:border-transparent"
          value={lowDisplay}
          onChange={handleOnChange}
        />
      </div>
      <div className="h-2/3">
        <CalcPad
          numberClick={(val) => numberHandler(val)}
          operationClick={(val) => operationHandler(val)}
        />
      </div>
    </>
  );
}

export { CalcDisplay };
