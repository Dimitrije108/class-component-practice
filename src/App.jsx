import React from 'react';
import FunctionalInput from './components/FunctionalInput';
import ClassInput from './components/ClassInput';
import './style.css';
import { useState } from "react";

export default function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
      {/* <FunctionalInput name="Functional component!" />
      <div className="divider" />
      <ClassInput name="Class based component!" /> */}
    </>
  );
}
