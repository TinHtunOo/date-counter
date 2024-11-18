import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <Step step={step} setStep={setStep} />
      <Counter counter={counter} setCounter={setCounter} />
      <Text step={step} counter={counter} />
    </div>
  );
}

function Step({ step, setStep }) {
  function plusHandler() {
    setStep((s) => s + 1);
  }
  function minusHandler() {
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <div className="step">
      <button onClick={minusHandler}>-</button>
      <span>Step: {step}</span>
      <button onClick={plusHandler}>+</button>
    </div>
  );
}

function Counter({ counter, setCounter }) {
  function plusHandler() {
    setCounter((c) => c + 1);
  }
  function minusHandler() {
    setCounter((c) => c - 1);
  }
  return (
    <div className="counter">
      <button onClick={minusHandler}>-</button>
      <span>Count: {counter}</span>
      <button onClick={plusHandler}>+</button>
    </div>
  );
}

function Text({ step, counter }) {
  const currentDateInMS = Date.now();
  const wantedDateInMS = currentDateInMS + step * counter * 86400000;
  const wantedDate = new Date(wantedDateInMS)
    .toString()
    .split(" ", 4)
    .join(" ");
  // console.log(wantedDate);
  // const week = wantedDate[0];
  // const month = wantedDate[1];
  // const day = wantedDate[2];
  // const year = wantedDate[3];
  return (
    <p>
      {currentDateInMS > wantedDateInMS
        ? `${-step * counter} days ago was `
        : ""}
      {currentDateInMS < wantedDateInMS
        ? `${step * counter} days from today is `
        : ""}
      {currentDateInMS === wantedDateInMS ? `Today was ` : ""}
      {wantedDate}
    </p>
  );
}
