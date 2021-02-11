import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "./About";
import { CountContext } from "./CountContext";
import Home from "./Home";
import { UserContext } from "./UserContext";

const UseContextHook = () => {
  const initialState = { firstName: null, lastName: null, age: null };
  const [value, setValue] = useState(initialState);

  const [count, setCount] = useState(0);

  const providerValue = { value, setValue };
  const countProviderValue = { count, setCount };

  return (
    <div>
      <h2>useContext hook</h2>

      <Router>
        <Link to="/">home</Link>
        <br />
        <Link to="/about">about</Link>

        <CountContext.Provider value={countProviderValue}>
          <UserContext.Provider value={providerValue}>
            <Route path="/" exact component={Home} />
            <Route path="/about/" exact component={About} />
          </UserContext.Provider>
        </CountContext.Provider>
      </Router>
    </div>
  );
};

export default UseContextHook;
