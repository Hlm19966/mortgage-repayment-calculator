import './App.css'
import MortgageCalculator from './MortgageCalculator'
import { InputContext } from './InputContext'
import { useState } from 'react'




function App() {
  const [formData, setFormData] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: ""
  });

  return (
    <InputContext.Provider value={{ formData, setFormData}}>
     <>
      <a className="skip-to-content"  href="#main">Skip to content</a>
      <MortgageCalculator />
     </>
    </InputContext.Provider>
  )
}

export default App
