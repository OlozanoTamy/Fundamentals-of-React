import React from "react";
const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <>
      <h2>
        {name} {exercises}
      </h2>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
};
const Total = ({ parts }) => {
  const totalExcerisice =
    parts[0].exercises + parts[1].exercises + parts[2].exercises;
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
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};
