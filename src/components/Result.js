import React from 'react';

const Result = ({ total, period, amount }) => (
  <div className="u-full-with resultado">
    <h2>Resume</h2>
    <p>The amount requested is: ${ amount }</p>
    <p>Period: { period } months</p>
    <p>Monthly payment: $ { (total/period).toFixed(2) }</p>
    <p>Total to pay: ${ (total).toFixed(2) }</p>
  </div>
);
 
export default Result;