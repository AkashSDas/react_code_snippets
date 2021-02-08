import React from "react";
import { Counter } from "./Counter";

// Topics
// - props
// - hooks
// - render prop

export const App: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>

      {/* <TextField
        text="hello james"
        ok={true}
        handleChange={(e) => {
          e.preventDefault();
          console.log(`${e.target.value}`);
        }}
      /> */}

      <Counter>
        {({ count, setCount }) => (
          <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
          </div>
        )}
      </Counter>
    </div>
  );
};
