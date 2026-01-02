import { useState } from "react";
import "./index.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue(value + val);
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  const clear = () => {
    setValue("");
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <input
        type="text"
        value={value}
        readOnly
        className="display"
      />

      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+"]  
          .map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}

        <button className="equal" onClick={calculate}>=</button>
        <button className="clear" onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;
