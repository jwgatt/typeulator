import { useState } from "react";

function App() {
  return (
    <div className="container">
      <div className="grid"></div>
      <div className="dis"></div>
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
      <div onClick={display} className="padButton1">
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
