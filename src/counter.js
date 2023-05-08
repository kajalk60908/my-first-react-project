import { useState } from "react";
import "./counter.css";

function Counter() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="container" style={{ backgroundColor: color }}></div>
      <input id="color-input" type="text"></input>
      <button
        type="button"
        onClick={() => setColor(document.getElementById("color-input").value)}
      >
        save
      </button>
    </>
  );
}
export default Counter;
