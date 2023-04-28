import React, { useState } from "react";
import './../styles/App.css';

function button() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click me
      </button>
      {isVisible && (
        <p id="para" className="show">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
      {!isVisible && <p id="para" className="hide"></p>}
    </div>
  );
}

export default button;


