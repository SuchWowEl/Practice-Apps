import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackspace,
  faXmark,
  faDivide,
  faMinus,
  faPlus,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

//ADD MORE RESOURCES, IF NOT BUGS WILL STAY

export const backspace = <FontAwesomeIcon icon={faBackspace} />;

export const x2 = (
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
  </math>
);

// export const one_over_x = (
//   <math>
//     <mfrac>
//       <mn>1</mn>
//       <msup>
//         <mi>x</mi>
//         <mo>&minus;1</mo>
//       </msup>
//     </mfrac>
//   </math>
// );

export const bar_x_bar = (
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mo>|</mo>
    <mrow>
      <mstyle mathsize="1.5em">
        <mi>x</mi>
      </mstyle>
    </mrow>
    <mo>|</mo>
  </math>
);

export const divide = (
  <FontAwesomeIcon icon={faDivide} style={{ color: "#ffffff" }} />
);

export const multiply = (
  <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff" }} />
);

export const minus = (
  <FontAwesomeIcon icon={faMinus} style={{ color: "#ffffff" }} />
);

export const plus = (
  <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
);

export const equals = (
  <FontAwesomeIcon icon={faEquals} style={{ color: "#ffffff" }} />
);

// export const square_root = (
//   <math>
//     <mroot>
//       <mi>x</mi>
//       <mn>2</mn>
//     </mroot>
//   </math>
// );

// export const nfactorial = (
//   <>
//     <i style={{font-style: "italic", font-family: "cursive"}}>n</i>
//     <i style="font-style: italic; font-family: cursive;">n</i>!
//   </>
// );

// export { any };
