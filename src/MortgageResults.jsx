import './App.css'
import empty from './assets/images/illustration-empty.svg'
import { useContext } from 'react'
import { InputContext } from './InputContext'


const MortgageResults = ({ results }) => {
 const { formData,setFormData } = useContext(InputContext);


    return(
        <>
        <main>
            {results ? (
            <div className='result-section'>
            <h3>Your results</h3>
            <p className='result-p'>
                Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.
            </p>

            <div className='result-container' aria-live='polite'>
                {formData.mortgageType === "repayment" ? (
                <>
                  <p className='monthly-repayment-p'>Your monthly repayments</p>
                  <output 
                  className='monthly-repayment'
                  aria-atomic="true">
                    £{Number(results.monthlyRepayment.toFixed(2)).toLocaleString('en-US')}
                  </output>

                  <p className='totall-repayment-p'>Total you'll repay over the term</p>
                  <output 
                  className='totall-repayment'
                  aria-atomic='true'>
                    £{Number((results.monthlyRepayment * results.months).toFixed(2)).toLocaleString('en-US')}
                 </output>
                </> 
                ) : (
                    <>
                    <p className='interest-only-p'>Interest only monthly repayment:</p>
                    <output
                     className='interest-only'
                     aria-atomic='false'>
                        £{Number(results.interestOnly.toFixed(2).toLocaleString('en-US'))} </output>
                    </>
                )}
            </div>

            </div>

             ) : (
            <>
            <img src={empty} 
             alt='empty Icon' 
             className='empty-img'/>
            <h2>Results shown here</h2>
            <p className='empty-p'>
                Complete the form and click "calculate repayment"
                to see what your monthly repayment would be.
            </p>
            </>
             )}
        </main>
        </>
    )
}

export default MortgageResults

