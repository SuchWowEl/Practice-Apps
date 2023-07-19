"use client";

import React from "react";
import * as icons from "./jsx-resources.js";
//import './index.css';

function Numbers({ value, onSquareClick }) {
  return (
    <button
      className="square mx-px rounded-md bg-[#2a286e] h-full w-[calc(100%/5.05)]"
      onClick={onSquareClick}
    >
      <div>{value}</div>
    </button>
  );
}

function Operations({ value, onSquareClick }) {
  return (
    <button
      className="square mx-px rounded-md bg-[#323232] h-full w-[calc(100%/5.05)]"
      onClick={onSquareClick}
    >
      <div>{value}</div>
    </button>
  );
}

// const backspace = <FontAwesomeIcon icon={faBackspace} />;
// const x2 = (
//   <math xmlns="http://www.w3.org/1998/Math/MathML">
//     <msup>
//       <mi>x</mi>
//       <mn>2</mn>
//     </msup>
//   </math>
// );

export default function CalcPad() {
  return (
    <div className="h-full flex flex-wrap gap-y-1 justify-center content-center text-center">
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations value="Shift" onSquareClick={() => handleClick("Shift")} />
        <Operations value="π" onSquareClick={() => handleClick("π")} />
        <Operations value="e" onSquareClick={() => handleClick(".")} />
        <Operations value="C" onSquareClick={() => handleClick("C")} />
        <Operations
          value={icons.backspace}
          onSquareClick={() => handleClick("backspace")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations value={icons.x2} onSquareClick={() => handleClick("x^2")} />
        <Operations
          value={<>&frac12;</>}
          onSquareClick={() => handleClick("1/x")}
        />
        <Operations
          value={icons.bar_x_bar}
          onSquareClick={() => handleClick("|x|")}
        />
        <Operations value="exp" onSquareClick={() => handleClick("exp")} />
        <Operations value="mod" onSquareClick={() => handleClick("mod")} />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          value={<>&radic;{"x"}</>}
          onSquareClick={() => handleClick("square_root")}
        />
        <Operations value="(" onSquareClick={() => handleClick("1/x")} />
        <Operations value=")" onSquareClick={() => handleClick("|x|")} />
        <Operations value="n!" onSquareClick={() => handleClick("exp")} />
        <Operations
          value={icons.divide}
          onSquareClick={() => handleClick("divide")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          value={
            <>
              x<sup>y</sup>
            </>
          }
          onSquareClick={() => handleClick("x^y")}
        />
        <Numbers value="7" onSquareClick={() => handleClick("7")} />
        <Numbers value="8" onSquareClick={() => handleClick("8")} />
        <Numbers value="9" onSquareClick={() => handleClick("9")} />
        <Operations
          value={icons.multiply}
          onSquareClick={() => handleClick("x")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations
          value={
            <>
              10<sup>x</sup>
            </>
          }
          onSquareClick={() => handleClick("10x")}
        />
        <Numbers value="4" onSquareClick={() => handleClick("4")} />
        <Numbers value="5" onSquareClick={() => handleClick("5")} />
        <Numbers value="6" onSquareClick={() => handleClick("6")} />
        <Operations
          value={icons.minus}
          onSquareClick={() => handleClick("-")}
        />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations value="log" onSquareClick={() => handleClick("log")} />
        <Numbers value="1" onSquareClick={() => handleClick("1")} />
        <Numbers value="2" onSquareClick={() => handleClick("2")} />
        <Numbers value="3" onSquareClick={() => handleClick("3")} />
        <Operations value={icons.plus} onSquareClick={() => handleClick("+")} />
      </div>
      <div className="board-row h-[calc(100%/7.5)] w-full">
        <Operations value="ln" onSquareClick={() => handleClick("ln")} />
        <Numbers value="+/-" onSquareClick={() => handleClick("+/-")} />
        <Numbers value="0" onSquareClick={() => handleClick("0")} />
        <Numbers value="." onSquareClick={() => handleClick(".")} />
        <Operations
          value={icons.equals}
          onSquareClick={() => handleClick("=")}
        />
      </div>
    </div>
  );
}

export { CalcPad };
