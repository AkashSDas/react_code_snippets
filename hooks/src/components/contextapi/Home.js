import React, { useContext, useEffect, useReducer, useRef } from "react";
import { CountContext } from "./CountContext";
import { UserContext } from "./UserContext";

const useForm = (initialValues) => {
  const [values, setValues] = React.useState(initialValues);
  return [
    values,
    (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    },
  ];
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default React.memo(() => {
  const { value, setValue } = useContext(UserContext);
  const { count, setCount } = useContext(CountContext);

  const homeRef = useRef(() => console.log("Ref"));
  const isCurrent = useRef(true);

  const [num, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
      console.log("Component UnMounted");
    };
  }, []);

  return (
    <div>
      <h1>Index Page</h1>
      {value.firstName != null ? (
        <div>
          {value.firstName} {value.lastName} has age {value.age}
        </div>
      ) : (
        <div>click button</div>
      )}
      <button
        onClick={() =>
          setValue({
            firstName: "James",
            lastName: "Bond",
            age: 19,
          })
        }
      >
        Change msg
      </button>

      <div>
        <h4>{count}</h4>
        <button
          onClick={React.useCallback(() => {
            setCount((e) => e + 1);
            homeRef.current();
          }, [setCount, homeRef])}
        >
          Increment
        </button>
      </div>

      <div>
        <h2>{num}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>Up</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Down</button>
      </div>
    </div>
  );
});
