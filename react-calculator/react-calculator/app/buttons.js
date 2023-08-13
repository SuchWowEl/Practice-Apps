"use client";

import React, { useState, useEffect } from "react";
import * as icons from "./jsx-resources.js";
//import './index.css';

const Numbers = ({
  buttonPressed,
  setBPressed,
  text,
  value,
  onSquareClick,
  mouseState,
  setMouseState,
}) => {
  //console.log("number rendered " + value);
  // const [isClicked, setIsClicked] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  const handleOnClick = () => {
    //setIsClicked(false);
    setMouseState({ ...mouseState, isClicked: "" });
    //text is sometimes <math>, fix the conflict
    onSquareClick(value);
    //setBPressed("");
    setMouseState({ ...mouseState, isHovered: value });
  };

  const handleOnMouseDown = () => {
    console.log("mouse down: " + text);
    setMouseState({ ...mouseState, isClicked: value });
    //setIsClicked(true);
    setBPressed(value);
  };

  const handleOnMouseUp = () => {
    console.log('mouse up:  ""');
    setMouseState({ ...mouseState, isClicked: "" });
    //setIsClicked(false);
    setBPressed("");
  };

  const handleOnMouseLeave = () => {
    setMouseState({ ...mouseState, isHovered: "" });
    //setIsHovered(false);
  };

  const handleOnMouseEnter = () => {
    // setIsHovered(true);
    //console.log("handleOnMouseEnter: " + buttonPressed);
    if (buttonPressed.length == 0 || buttonPressed == value)
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
  buttonPressed,
  setBPressed,
  text,
  value,
  onSquareClick,
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
    onSquareClick(value);
    //setBPressed("");
    setMouseState({ ...mouseState, isHovered: value });
  };

  const handleOnMouseDown = () => {
    console.log("mouse down: " + text);
    setMouseState({ ...mouseState, isClicked: value });
    //setIsClicked(true);
    setBPressed(value);
  };

  const handleOnMouseUp = () => {
    console.log('mouse up:  ""');
    setMouseState({ ...mouseState, isClicked: "" });
    //setIsClicked(false);
    setBPressed("");
  };

  const handleOnMouseLeave = () => {
    setMouseState({ ...mouseState, isHovered: "" });
    //setIsHovered(false);
  };

  const handleOnMouseEnter = () => {
    // setIsHovered(true);
    //console.log("handleOnMouseEnter: " + buttonPressed);
    if (buttonPressed.length == 0 || buttonPressed == value)
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

export default function CalcPad({ buttonPressed, setBPressed, onSquareClick }) {
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
    setBPressed("");
  }

  return (
    <div className="h-full flex flex-wrap gap-y-1 justify-center content-center text-center">
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="Shift"
          value="Shift"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="π"
          value="π"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="e"
          value="e"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="C"
          value="C"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={icons.backspace}
          value="backspace"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={icons.x2}
          value="x^2"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={<>&frac12;</>}
          value="1/x"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={icons.bar_x_bar}
          value="|x|"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="exp"
          value="exp"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="mod"
          value="mod"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={<>&radic;{"x"}</>}
          value="√("
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="("
          value="("
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text=")"
          value=")"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="n!"
          value="n!"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={icons.divide}
          value="divide"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={
            <>
              x<sup>y</sup>
            </>
          }
          value="x^y"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="7"
          value="7"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="8"
          value="8"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="9"
          value="9"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={icons.multiply}
          value="x"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={
            <>
              10<sup>x</sup>
            </>
          }
          value="10x"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="4"
          value="4"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="5"
          value="5"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="6"
          value="6"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={icons.minus}
          value="-"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="log"
          value="log"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="1"
          value="1"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="2"
          value="2"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="3"
          value="3"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={icons.plus}
          value="+"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="ln"
          value="ln"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="+/-"
          value="+/-"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="0"
          value="0"
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text="."
          value="."
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          text={icons.equals}
          value="="
          onSquareClick={(val) => onSquareClick(val)}
          mouseState={mouseState}
          setMouseState={setMouseState}
        />
      </div>
    </div>
  );
}

export { CalcPad };
