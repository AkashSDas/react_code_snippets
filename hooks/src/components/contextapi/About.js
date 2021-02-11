import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { CountContext } from "./CountContext";
import { UserContext } from "./UserContext";

export default withRouter((props) => {
  const { value, setValue } = React.useContext(UserContext);
  const { count, setCount } = React.useContext(CountContext);

  useEffect(() => {
    console.log("Component Mount");

    return () => {
      console.log("Component Unmount");
    };
  }, []);

  return (
    <div>
      <h2>About Page</h2>

      <div>{value.firstName}</div>

      <div>
        <h4>{count}</h4>
        <button onClick={() => setCount((e) => e - 1)}>Decrement</button>

        <button
          onClick={() => {
            props.history.push("/");
          }}
        >
          Go back
        </button>
      </div>
    </div>
  );
});
