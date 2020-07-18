import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>This is the count {count}</div>

      <div onClick={() => setCount(count + 1)}>Increment</div>
      <div onClick={() => setCount(count - 1)}>Decrement</div>
    </div>
  );
}

export default CounterExample;
