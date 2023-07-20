"use client";

import React, { useState } from "react";
import * as icons from "./jsx-resources.js";
//import './index.css';

const Numbers = ({ buttonPressed, setBPressed, value, onSquareClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOnClick = () => {
    setIsClicked(false);
    onSquareClick(value);
    setBPressed("");
  };

  const handleOnMouseDown = () => {
    console.log("mouse down");
    setIsClicked(true);
    setBPressed(value);
  };

  const handleOnMouseUp = () => {
    console.log("mouse up");
    setIsClicked(false);
    setBPressed("");
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOnMouseEnter = () => {
    // setIsHovered(true);
    console.log("handleOnMouseEnter: " + buttonPressed);
    if (buttonPressed.length == 0 || buttonPressed == value) setIsHovered(true);
  };

  //${isClicked && isHovered ? "text-gray-400" : "text-white"}
  return (
    <button
      className={
        "square mx-px rounded-md h-full w-[calc(100%/5.1)]" +
        ` 
          ${
            isHovered
              ? isClicked
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
      <div>{value}</div>
    </button>
  );
};

const Operations = ({ buttonPressed, setBPressed, value, onSquareClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOnClick = () => {
    setIsClicked(false);
    onSquareClick(value);
    setBPressed("");
  };

  const handleOnMouseDown = () => {
    console.log("mouse down");
    setIsClicked(true);
    setBPressed(value);
  };

  const handleOnMouseUp = () => {
    console.log("mouse up");
    setIsClicked(false);
    setBPressed("");
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOnMouseEnter = () => {
    // setIsHovered(true);
    console.log("handleOnMouseEnter: " + buttonPressed);
    if (buttonPressed.length == 0 || buttonPressed == value) setIsHovered(true);
  };

  return (
    <button
      className={
        "square mx-px rounded-md h-full w-[calc(100%/5.1)]" +
        ` 
          ${isHovered ? "bg-[#2a286e] " : "bg-[#323232]"} 
          ${isClicked && isHovered ? "text-gray-400" : "text-white"}
        `
      }
      onClick={handleOnClick}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
    >
      <div>{value}</div>
    </button>
  );
};

export default function CalcPad() {
  const [buttonPressed, setBPressed] = useState("");
  let buttonPressed2;

  function handleClick(string) {
    buttonPressed2 = string;
    console.log("buttonPressed: " + buttonPressed2);
  }

  return (
    <div className="h-full flex flex-wrap gap-y-1 justify-center content-center text-center">
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="Shift"
          onSquareClick={() => handleClick("Shift")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="π"
          onSquareClick={() => handleClick("π")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="e"
          onSquareClick={() => handleClick(".")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="C"
          onSquareClick={() => handleClick("C")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={icons.backspace}
          onSquareClick={() => handleClick("backspace")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={icons.x2}
          onSquareClick={() => handleClick("x^2")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={<>&frac12;</>}
          onSquareClick={() => handleClick("1/x")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={icons.bar_x_bar}
          onSquareClick={() => handleClick("|x|")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="exp"
          onSquareClick={() => handleClick("exp")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="mod"
          onSquareClick={() => handleClick("mod")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={<>&radic;{"x"}</>}
          onSquareClick={() => handleClick("square_root")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="("
          onSquareClick={() => handleClick("1/x")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value=")"
          onSquareClick={() => handleClick("|x|")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="n!"
          onSquareClick={() => handleClick("exp")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={icons.divide}
          onSquareClick={() => handleClick("divide")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={
            <>
              x<sup>y</sup>
            </>
          }
          onSquareClick={() => handleClick("x^y")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="7"
          onSquareClick={() => handleClick("7")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="8"
          onSquareClick={() => handleClick("8")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="9"
          onSquareClick={() => handleClick("9")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={icons.multiply}
          onSquareClick={() => handleClick("x")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={
            <>
              10<sup>x</sup>
            </>
          }
          onSquareClick={() => handleClick("10x")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="4"
          onSquareClick={() => handleClick("4")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="5"
          onSquareClick={() => handleClick("5")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="6"
          onSquareClick={() => handleClick("6")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={icons.minus}
          onSquareClick={() => handleClick("-")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="log"
          onSquareClick={() => handleClick("log")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="1"
          onSquareClick={() => handleClick("1")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="2"
          onSquareClick={() => handleClick("2")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="3"
          onSquareClick={() => handleClick("3")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={icons.plus}
          onSquareClick={() => handleClick("+")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="ln"
          onSquareClick={() => handleClick("ln")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="+/-"
          onSquareClick={() => handleClick("+/-")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="0"
          onSquareClick={() => handleClick("0")}
        />
        <Numbers
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value="."
          onSquareClick={() => handleClick(".")}
        />
        <Operations
          buttonPressed={buttonPressed}
          setBPressed={setBPressed}
          value={icons.equals}
          onSquareClick={() => handleClick("=")}
        />
      </div>
    </div>
  );
}

export { CalcPad };
