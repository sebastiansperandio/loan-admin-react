import React, { Fragment } from 'react';
import { calculateTotal } from '../helpers';

const Form = (props) => {
  
  let { saveError, amount, saveAmount, period, savePeriod, saveTotal, saveLoadSpinner } = props;

  const calculateLoan = (e) => {
    e.preventDefault();

    if( amount === 0 || period === '' || isNaN(amount) || isNaN(period) ) {
      saveError(true);
      return;
    }

    saveError(false);
    
    //activate spinner
    saveLoadSpinner(true);

    setTimeout(() => {
      
      const total = calculateTotal(amount, period);
      saveTotal(total);

      //deactivate spinner
      saveLoadSpinner(false);
    
    }, 3000);
  
  }

  return ( 
    <Fragment>
      <form onSubmit={ calculateLoan }>
        <div className="row">
            <div>
                <label>Loan amount</label>
                <input 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Ejemplo: 3000" 
                    onChange={ e => saveAmount( parseInt( e.target.value ) ) }
                    />
            </div>
            <div>
                <label>Payment period</label>
                <select 
                    className="u-full-width"
                    onChange={ e => savePeriod( parseInt( e.target.value ) ) }
                    >
                    <option value="">Select</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                </select>
            </div>
            <div>
                <input 
                    type="submit" 
                    value="Calcular" 
                    className="button-primary u-full-width" 
                    />
            </div>
        </div>
      </form>
    </Fragment>
   );
}
 
export default Form;