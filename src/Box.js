import { useState, useEffect } from "react";

function Box({ count, setCount }) {
  useEffect(() => {
    if (count === 0) setSign("");
  }, [count]);

  const [sign, setSign] = useState("");

  function click() {
    if (sign !== "") return;

    if (count % 2 === 0) setSign("X");
    else setSign("O");

    setCount(count + 1);
  }
  return (
    <div className="box" onClick={click}>
      <div className="sign">{sign}</div>
    </div>
  );
}

export default Box;
