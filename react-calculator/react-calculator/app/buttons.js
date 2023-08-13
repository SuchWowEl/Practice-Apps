"use client";

import React, { useState, useEffect } from "react";
import * as icons from "./jsx-resources.js";
//import './index.css';

const Numbers = ({ text, value, numberClick, mouseState, setMouseState }) => {
  //console.log("number rendered " + value);
  // const [isClicked, setIsClicked] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  const handleOnClick = () => {
    //setIsClicked(false);
    setMouseState({ ...mouseState, isClicked: "" });
    //text is sometimes <math>, fix the conflict
    numberClick(value);
    //setBPressed("");
    setMouseState({ ...mouseState, isHovered: value });
  };

  const handleOnMouseDown = () => {
    console.log("mouse down: " + text);
    setMouseState({ ...mouseState, isClicked: value });
    //setIsClicked(true);
    //setBPressed(value);
  };

  const handleOnMouseUp = () => {
    console.log('mouse up:  ""');
    setMouseState({ ...mouseState, isClicked: "" });
    //setIsClicked(false);
    //setBPressed("");
  };

  const handleOnMouseLeave = () => {
    setMouseState({ ...mouseState, isHovered: "" });
    //setIsHovered(false);
  };

  const handleOnMouseEnter = () => {
    // setIsHovered(true);
    //console.log("handleOnMouseEnter: " + buttonPressed);
    if (mouseState.isClicked.length == 0 || mouseState.isClicked == value)
      setMouseState({ ...mouseState, isHovered: value });
  };

  // function styler() {
  //   let estilo =
  //     "square mx-px rounded-md h-full w-[calc(100%/5.1)]" +
  //     `
  //     ${
  //       mouseState.isHovered == value
  //         ? mouseState.isClicked == value
  //           ? "bg-[#1e1c4d] text-gray-300"
  //           : "bg-[#323232] text-white"
  //         : "bg-[#2a286e] text-white"
  //     }
  //   `;
  //   // if (value == ".") {
  //   //   console.log("------------------------------------------ 👀👀👀👀👀");
  //   //   console.log(value);
  //   //   console.log("isHovered is: " + mouseState.isHovered);
  //   //   console.log("isClicked is: " + mouseState.isClicked);
  //   // }
  //   return estilo;
  // }

  return (
    <button
      className={
        "square mx-px rounded-md h-full w-[calc(100%/5.1)]" +
        ` 
      ${
        mouseState.isHovered == value
          ? mouseState.isClicked == value
            ? "bg-[#1e1c4d] text-gray-300"
            : "bg-[#323232] text-white"
          : "bg-[#2a286e] text-white"
      } 
    `
      }
      onClick={handleOnClick}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
    >
      <div>{text}</div>
    </button>
  );
};

const Operations = ({
  text,
  value,
  operationClick,
  mouseState,
  setMouseState,
}) => {
  // const [isClicked, setIsClicked] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   if (buttonPressed.length == 0) {
  //     console.log("useEffect OPERATIONS");
  //     setIsClicked(false);
  //   }
  // }, [buttonPressed]);

  const handleOnClick = () => {
    //setIsClicked(false);
    setMouseState({ ...mouseState, isClicked: "" });
    //text is sometimes <math>, fix the conflict
    operationClick(value);
    //setBPressed("");
    setMouseState({ ...mouseState, isHovered: value });
  };

  const handleOnMouseDown = () => {
    console.log("mouse down: " + value);
    setMouseState({ ...mouseState, isClicked: value });
    //setIsClicked(true);
    //setBPressed(value);
  };

  const handleOnMouseUp = () => {
    console.log('mouse up:  ""');
    setMouseState({ ...mouseState, isClicked: "" });
    //setIsClicked(false);
    //setBPressed("");
  };

  const handleOnMouseLeave = () => {
    setMouseState({ ...mouseState, isHovered: "" });
    //setIsHovered(false);
  };

  const handleOnMouseEnter = () => {
    // setIsHovered(true);
    //console.log("handleOnMouseEnter: " + buttonPressed);
    if (mouseState.isClicked.length == 0 || mouseState.isClicked == value)
      setMouseState({ ...mouseState, isHovered: value });
  };

  return (
    <button
      className={
        "square mx-px rounded-md h-full w-[calc(100%/5.1)]" +
        ` 
          ${mouseState.isHovered == value ? "bg-[#2a286e] " : "bg-[#323232]"} 
          ${
            mouseState.isClicked == value && mouseState.isHovered == value
              ? "text-gray-400"
              : "text-white"
          }
        `
      }
      onClick={handleOnClick}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
    >
      <div>{text}</div>
    </button>
  );
};

export default function CalcPad({ numberClick, operationClick }) {
  console.log("render CalcPad");
  const [mouseState, setMouseState] = useState({
    isClicked: "",
    isHovered: "",
  });

  useEffect(() => {
    window.addEventListener("mouseup", handleOnMouseUpOutside, true);

    return () => {
      window.removeEventListener("mouseup", handleOnMouseUpOutside, true);
    };
  });

  function handleOnMouseUpOutside() {
    //console.log("handleOnMouseUp @ buttons.js !!!!!!!!!!!!!!!");
    setMouseState({
      isClicked: "",
      isHovered: "",
    });
    //setBPressed("");
  }

  return (
    <div className="h-full flex flex-wrap gap-y-1 justify-center content-center text-center">
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          text="Shift"
          value="Shift"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text="π"
          value="π"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text="e"
          value="e"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text="C"
          value="C"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text={icons.backspace}
          value="backspace"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          text={icons.x2}
          value="x^2"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text={<>&frac12;</>}
          value="1/x"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text={icons.bar_x_bar}
          value="|x|"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text="exp"
          value="exp"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text="mod"
          value="mod"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          text={<>&radic;{"x"}</>}
          value="√("
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text="("
          value="("
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text=")"
          value=")"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text="n!"
          value="n!"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text={icons.divide}
          value="divide"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          text={
            <>
              x<sup>y</sup>
            </>
          }
          value="x^y"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="7"
          value="7"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="8"
          value="8"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="9"
          value="9"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text={icons.multiply}
          value="x"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          text={
            <>
              10<sup>x</sup>
            </>
          }
          value="10x"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="4"
          value="4"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="5"
          value="5"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="6"
          value="6"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text={icons.minus}
          value="-"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          text="log"
          value="log"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="1"
          value="1"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="2"
          value="2"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="3"
          value="3"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text={icons.plus}
          value="+"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          text="ln"
          value="ln"
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="+/-"
          value="+/-"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="0"
          value="0"
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          text="."
          value="."
          numberClick={(val) => numberClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          text={icons.equals}
          value="="
          operationClick={(val) => operationClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
    </div>
  );
}

export { CalcPad };
