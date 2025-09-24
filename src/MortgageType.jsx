import './App.css'
import { useContext } from 'react'
import { InputContext } from './InputContext'


const MortgageType = ({ handelChange, errors }) => {
    const {formData, setFormData} = useContext(InputContext);

    
    return (
        <>
        <fieldset
         aria-describedby={errors.mortgageType ? 'mortgageType-error' : ''}
         aria-invalid={!!errors.mortgageType}>
            <legend>Mortgage Type</legend>


            <label className='radio-label'>
            <input
             type='radio'
             name='mortgageType'
             value='repayment'
             checked={formData.mortgageType === "repayment"}
             onChange={handelChange}
            />
            Repayment
            </label>


            <label className='radio-label'>
            <input
             type='radio'
             name='mortgageType'
             value='interestOnly'
             checked={formData.mortgageType === "interestOnly"}
             onChange={handelChange}
            />
           Interest Only
           </label>
        </fieldset>

        {errors.mortgageType && (
                    <p 
                    className='error-text'
                    role='alert'
                    id='mortgageType-error'
                    >{errors.mortgageType}</p>
           )}
        </>
    )
}

export default MortgageType