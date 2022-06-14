import { useState } from "react";
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom";
// Typescript was throwing a 'react undefined error', and after trawling through node_modules and babel config,
// the solution was to add asterisks to the imports. Could have been a problem with the namespace.

function App() {
  const [expression, setExpression] = useState("");

  // Logic for making the symbols appear on the display sequentially
  const display = (symbol: any) => {
    setExpression((prev) => prev + symbol);
  };

  return (
    <div className="container">
      <div className="grid"></div>
      <div className="dis"></div>

      <input type="text" value={expression} placeholder="0" disabled />
      <div onClick={display} className="padButton AC">
        AC
      </div>
      <div onClick={display} className="padButton C">
        C
      </div>
      <div onClick={display} className="padButton div">
        /
      </div>
      <div onClick={display} className="padButton times">
        x
      </div>
      <div onClick={() => display("1")} className="padButton1">
        1
      </div>
      <div onClick={display} className="padButton2">
        2
      </div>
      <div onClick={display} className="padButton3">
        3
      </div>
      <div onClick={display} className="padButton4">
        4
      </div>
      <div onClick={display} className="padButton5">
        5
      </div>
      <div onClick={display} className="padButton6">
        6
      </div>
      <div onClick={display} className="padButton7">
        7
      </div>
      <div onClick={display} className="padButton8">
        8
      </div>
      <div onClick={display} className="padButton9">
        9
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
