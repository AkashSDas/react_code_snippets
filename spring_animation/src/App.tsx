import * as easings from "d3-ease";
import React from "react";
import { animated, config, useSpring } from "react-spring/web";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <UseSpring />
    </div>
  );
};

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (nums: number[]) => {
  console.log(nums);
  return `perspective(600px) rotateX(${nums[0]}deg) rotateY(${nums[1]}deg) scale(${nums[2]})`;
};

const UseSpring: React.FC = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const count = useSpring({
    number: 1,
    from: { number: 0 },
    config: config.molasses,
  });
  const color = useSpring({
    from: {
      color: "white",
      height: "0rem",
      width: "0rem",
      // backgroundColor: "black",
      fontSize: "1rem",
      transform: "rotate(0deg) scale(0)",
    },
    to: {
      color: "black",
      height: "10rem",
      width: "10rem",
      // backgroundColor: "cyan",
      fontSize: "2rem",
      transform: "rotate(360deg) scale(1)",
    },
    // delay: 200,
    config: {
      duration: 900,
      // mass: 100,
      // tension: 10,
      easing: easings.easeSinInOut,
      ...{ mass: 5, tension: 350, friction: 40 },
    },
    reset: true,
    // reverse: true,
  });

  const [props, setProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div id="top">
      <animated.h1 style={fade}>I will fade in</animated.h1>
      <animated.h3>{count.number}</animated.h3>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) =>
          setProps({ xys: calc(x, y) })
        }
        onMouseLeave={() => setProps({ xys: [0, 0, 1] })}
        className="card"
        style={{
          ...color,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "10px",
          boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
          transition: "box-shadow 0.5s",
          willChange: "transform",
          border: "15px solid white",
          transform: props.xys.interpolate(trans),
        }}
      >
        Hi there
      </animated.div>
    </div>
  );
};

export default App;
