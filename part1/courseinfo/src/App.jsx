import React from "react";
const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};
const Content = ({ part, exercise }) => {
  return (
    <>
      <h2>
        {part}
        {"   "} {exercise}
      </h2>
    </>
  );
};
const Total = ({ exercise1, exercises2, exercises3 }) => {
  const totalExcerisice = exercise1 + exercises2 + exercises3;
  return (
    <>
      <h2>
        Total of Excersises:{"  "} {totalExcerisice}
      </h2>
    </>
  );
};

export const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total
        exercise1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
};
