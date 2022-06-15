import { useState } from "react";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
// Typescript was throwing a 'react undefined error', and after trawling through node_modules and babel config,
// the solution was to add asterisks to the imports module. Might have been a problem with the namespace.

function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);

  // Logic for making the symbols appear on the display sequentially, forming a mathematical expression
  const display = (symbol: any) => {
    setExpression((prev) => prev + symbol);

	{/*	
    // If last character is equals sign, repeat the operator-operand execution.
    if (expression[expression.length-1] == "=") {
      // Reg expression checks if symbol is digit or dot.
      if (/[0-9]/.test(symbol)) setExpression(symbol);
      else {
        setExpression(answer + symbol);
      }
    }*/}
  };

  // Evaluate expression in display, return the result as state.
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };

  // Remove last digit from expression in display, setting answer to 0 once string is empty.
  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <input type="text" value={expression} placeholder="0" disabled />
		  <div className="total">
			{answer}
		  </div>
        </div>

        <div onClick={allClear} className="padButton AC power">
          AC
        </div>
        <div onClick={clear} className="padButton C power">
          C
        </div>
        <div onClick={() => display("/")} className="padButton divide">
          /
        </div>
        <div onClick={() => display("*")} className="padButton multiply">
          X
        </div>
        <div onClick={() => display("7")} className="padButton 7 numbers">
          7
        </div>
        <div onClick={() => display("8")} className="padButton 8 numbers">
          8
        </div>
        <div onClick={() => display("9")} className="padButton 9 numbers">
          9
        </div>
        <div onClick={() => display("-")} className="padButton minus">
          -
        </div>
        <div onClick={() => display("4")} className="padButton 4 numbers">
          4
        </div>
        <div onClick={() => display("5")} className="padButton 5 numbers">
          5
        </div>
        <div onClick={() => display("6")} className="padButton 6 numbers">
          6
        </div>
        <div onClick={() => display("+")} className="padButton add">
          +
        </div>
        <div onClick={() => display("1")} className="padButton 1 numbers">
          1
        </div>
        <div onClick={() => display("2")} className="padButton 2 numbers ">
          2
        </div>
        <div onClick={() => display("3")} className="padButton 3 numbers">
          3
        </div>
        <div onClick={calculate} className=" padButton equal">
          =
        </div>
        <div onClick={() => display("zero")} className=" padButton zero">
          0
        </div>
        <div onClick={() => display("dot")} className=" padButton dot">
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
