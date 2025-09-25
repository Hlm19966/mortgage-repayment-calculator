import './App.css'
import MortgageType from './MortgageType'
import calculator from './assets/images/icon-calculator.svg'
import { useContext} from 'react'
import { InputContext } from './InputContext'


const MortgageInputs =({ errors, handelSubmit }) => {

    const { formData, setFormData } = useContext(InputContext);


   /*onchange*/
    const handelChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }



    return (
        <>
        <form onSubmit={handelSubmit}>
            <fieldset>
             <legend className='sr-only'>Mortgage Details</legend>

               <div className='input-group'>
                <label htmlFor='mortgageAmount'>Mortgage Amount</label>
                <div className={`input-wrapper ${errors.mortgageAmount ? 'input-wrapper-error' : ''}`}>
                 <span className='sign sign-left'>£</span>
                 <input
                 type='text'
                 value={formData.mortgageAmount}
                 onChange={handelChange}
                 id='mortgageAmount'
                 name='mortgageAmount'
                 aria-describedby={errors.mortgageAmount ? 'mortgageAmount-error' : ''}
                 aria-invalid={!!errors.mortgageAmount}
                 />
                </div>
                {errors.mortgageAmount && (
                    <p 
                    className='error-text'
                    id='mortgageAmount-error'
                    role='alert'
                    >{errors.mortgageAmount}</p>
                )}
                </div>


                <div className='grid-input'>
                <label htmlFor='mortgageTerm'>Mortgage Term</label>
                <div className={`input-wrapper input-wrapper-right ${errors.mortgageTerm ? 'input-wrapper-error' : ''}`}>
                 <span className='sign sign-right'>years</span>
                 <input 
                 type='text'
                 value={formData.mortgageTerm}
                 onChange={handelChange}
                 id='mortgageTerm'
                 name='mortgageTerm'
                 aria-describedby={errors.mortgageTerm ? 'mortgageTerm-error' : ''}
                 aria-invalid={!!errors.mortgageTerm}
                 />
                </div>
                {errors.mortgageTerm && (
                    <p
                     className='error-text'
                     id='mortgageTerm-error'
                     role='alert'>
                    {errors.mortgageTerm}</p>
                )}
                


                <label htmlFor='interestRate' className='label-interestrate'>Interest Rate</label>
                <div className={`input-wrapper input-wrapper-right ${errors.interestRate ? 'input-wrapper-error' : ''} `}>
                 <span className='sign sign-right'>%</span>
                 <input
                 type='text'
                 value={formData.interestRate}
                 onChange={handelChange}
                 id='interestRate'
                 name='interestRate'
                 aria-describedby={errors.interestRate ? 'interestRate-error' : ''}
                 aria-invalid={!!errors.interestRate}
                 />
                </div>
                {errors.interestRate && (
                    <p
                    className='error-text'
                    id='interestRate-error'
                    role='alert'>
                    {errors.interestRate}</p>
                )}
                </div>
            </fieldset>

             <MortgageType handelChange={handelChange} errors={errors}/>

             <button
             type='submit'
             className='Calculator-btn'>
             <img src={calculator} alt='Calculator Icon' className='calculator-icon'/>
             Calculator Repayments
         </button>
        </form>
        </>
    )
}

export default MortgageInputs