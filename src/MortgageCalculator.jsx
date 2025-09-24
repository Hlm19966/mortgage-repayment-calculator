import './App.css'
import MortgageInputs from './MortgageInputs'
import MortgageResults from './MortgageResults'
import { useContext, useState} from 'react'
import { InputContext } from './InputContext'


const MortgageCalculator = () => {
 const {formData, setFormData} = useContext(InputContext);
 const [results, setResults] = useState(null);
 const [errors, setErrors] = useState({});
 


/*caculating the mortgage*/
  const handelCalculator = (e) => {
    const amount = parseFloat(formData.mortgageAmount); 
    const monthlyRate = parseFloat(formData.interestRate) /100 /12 || 0; 
    const months = parseFloat(formData.mortgageTerm) * 12 || 0; 

    let monthlyRepayment = 0;
    let interestOnly = 0;

    if (monthlyRate > 0 && months > 0) {
        monthlyRepayment = amount *
         (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
         (Math.pow(1 + monthlyRate, months) - 1);

         interestOnly = amount * monthlyRate; 
    } 
    else if(months > 0) {
        monthlyRepayment = amount / months;
        interestOnly = 0;
    }

    setResults({monthlyRepayment, interestOnly, months});
  }


     /*errors*/
    const handelSubmit =(e) => {
      e.preventDefault();
      handelCalculator();

        let newErrors = {};

        if(!formData.mortgageAmount || isNaN(parseFloat(formData.mortgageAmount))) {
            newErrors.mortgageAmount = "This field is required";
        }

        if(!formData.mortgageTerm || isNaN(parseFloat(formData.mortgageTerm || parseFloat(formData.mortgageTerm < 10)))) {
            newErrors.mortgageTerm = "This field is required";
        }

        if(!formData.interestRate || isNaN(parseFloat(formData.interestRate))) {
            newErrors.interestRate = "This field is required";
        }

        if(!formData.mortgageType) {
            newErrors.mortgageType = "This field is required";
        }

        setErrors(newErrors);

        /* all errors for inputs*/
        if (Object.keys(errors).length > 0) {
          setResults(null);
           return;
        }
          
        handelCalculator();
    }





 const handelRemove = (e) => {
  e.preventDefault();
  setFormData({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: ""
  })
  setErrors({});
  setResults(null);
 }
 
    return (
        <>
        <div className='mortgage-container'>
            <header>

              <div className='header-container'>
                <h1>Mortgage Calculator</h1>
                <button
                 type='button'
                 className='clear-btn'
                 onClick={handelRemove}
                 >
                  Clear All
                </button>
              </div>

            <MortgageInputs
             handelCalculator={handelCalculator} 
             errors={errors}
             setErrors={setErrors}
             handelSubmit ={handelSubmit}
            /> 

            </header>
            
            <MortgageResults results={results}/>
        </div>
        </>
    )
}

export default MortgageCalculator