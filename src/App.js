import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <Step step={step} setStep={setStep} />
      <Counter counter={counter} setCounter={setCounter} />
      <Text step={step} counter={counter} />
      <Reset
        step={step}
        counter={counter}
        setStep={setStep}
        setCounter={setCounter}
      />
    </div>
  );
}

function Step({ step, setStep }) {
  // function plusHandler() {
  //   setStep((s) => s + 1);
  // }
  // function minusHandler() {
  //   if (step > 1) setStep((s) => s - 1);
  // }
  return (
    <div className="step">
      {/* <button onClick={minusHandler}>-</button>
      <span>Step: {step}</span>
      <button onClick={plusHandler}>+</button> */}
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => {
          setStep(e.target.value);
        }}
      />{" "}
      <span>{step}</span>
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
      {/* <span>Count: {counter}</span> */}
      <input
        type="number"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
      />
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
    <h3>
      {currentDateInMS > wantedDateInMS
        ? `${-step * counter} days ago was `
        : ""}
      {currentDateInMS < wantedDateInMS
        ? `${step * counter} days from today is `
        : ""}
      {currentDateInMS === wantedDateInMS ? `Today was ` : ""}
      {wantedDate}
    </h3>
  );
}

function Reset({ setStep, setCounter, step, counter }) {
  function resetHandler() {
    setStep((s) => 1);
    setCounter((c) => 0);
  }
  return (
    <div>
      {step !== 1 || counter !== 0 ? (
        <button className="reset" onClick={resetHandler}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
