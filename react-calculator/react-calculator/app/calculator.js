"use client";

import React, { useState, useEffect, useRef } from "react";
import { CalcDisplay } from "./calcDisplay.js";
import { CalcPad } from "./buttons.js";
//import { HistoryField } from "./history-field.js";
import { InputField } from "./input-field.js";
//import './index.css';

export default function Whole_Calculator() {
  // const [buttonPressed, setBPressed] = useState("");
  // const [displayChar, setDisplayVar] = useState("");
  // //let displayChar = "";

  // useEffect(() => {
  //   window.addEventListener("mouseup", handleOnMouseUp, true);

  //   return () => {
  //     window.removeEventListener("mouseup", handleOnMouseUp, true);
  //   };
  // });

  // function handleOnMouseUp() {
  //   console.log("handleOnMouseUp @ calculator.js !!!!!!!!!!!!!!!");
  //   setBPressed(""); //clear num
  // }

  // function backspacer(string) {
  //   let temp = string.replace(/backspace/g, "");
  //   temp = temp.substring(0, temp.length - 1);
  //   console.log("temp is " + temp);
  //   return temp;
  // }

  // function handleClick(char) {
  //   // displayChar = char;
  //   console.log("----------------------------------");
  //   console.log("WRITTEN: " + char); //display to InputField
  //   if (char == "backspace") {
  //     console.log("backed");
  //     setDisplayVar(() => backspacer(displayChar));
  //   } else if (char != "") {
  //     setDisplayVar(displayChar + char);
  //   }
  //   setBPressed("");
  // }

  return (
    <main className="w-full h-full flex justify-center">
      <div className="bg-[#16161d] w-4/5 text-white h-full ">
        <CalcDisplay />
      </div>

      <div className="bg-[#16161d] border-l-2 text-white border-indigo-900  w-1/5  h-full">
        <p className="text-xl text-indigo-500 w-full pl-2">History: </p>
      </div>
    </main>
  );
}

export { Whole_Calculator };
