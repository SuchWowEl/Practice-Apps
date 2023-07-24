"use client";

import React, { useState, useEffect, useRef } from "react";
import * as icons from "./jsx-resources.js";
import { CalcPad } from "./buttons.js";
import { HistoryField } from "./history-field.js";
import { InputField } from "./input-field.js";
//import './index.css';

export default function Whole_Calculator() {
  const [buttonPressed, setBPressed] = useState("");

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUpOutside, true);

    return () => {
      document.removeEventListener("mouseup", handleMouseUpOutside, true);
    };
  }, []);

  const handleMouseUpOutside = (e) => {
    if (refOne?.current || !refOne.current?.contains(e.target)) {
      setBPressed("");
    }
  };

  function handleClick(string) {
    console.log("WRITTEN: " + string);
    setBPressed(string);
  }

  // useEffect(() => {
  //   console.log("WRITTEN: " + buttonPressed);
  // }, [buttonPressed]);

  return (
    <main className="w-full h-full flex justify-center">
      <div className="bg-[#16161d] w-4/5 text-white h-full ">
        <InputField buttonPressed={buttonPressed} />
        <div className="h-2/3">
          <CalcPad
            useRef={refOne}
            buttonPressed={buttonPressed}
            setBPressed={(val) => setBPressed(val)}
            onSquareClick={(val) => handleClick(val)}
          />
        </div>
      </div>

      <HistoryField buttonPressed={buttonPressed} />
    </main>
  );
}

export { Whole_Calculator };
