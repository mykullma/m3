import { useState } from "react";
import Box from "./Box";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="container">
        {[...Array(9)].map((item, idx) => (
          <Box count={count} setCount={setCount} />
        ))}
      </div>

      <button className="clear" onClick={() => setCount(0)}>
        Clear
      </button>
    </div>
  );
}

export default App;
