import { useState } from "react";

import Header from "./components/Header"
import Results from "./components/Results"
import Values from "./components/Values"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <Values userInput={userInput} onChange={handleChange} />
      <Results input={userInput}/>
    </>
  )
}

export default App
