export function calculateTotal(amount, period){
  
  let totalAmount;
  
  switch (true) {
    case amount <= 1000:
      totalAmount = amount * .25;
      break;
  
    case amount > 1000 && amount <= 5000:
      totalAmount = amount * .20; 
      break;
  
    case amount > 5000 && amount <= 10000:
      totalAmount = amount * .15;
      break;
  
    case amount > 10000:
      totalAmount = amount * .10;
      break;
  
    default:
      totalAmount = amount * .25;
      break;
  }

  let totalPeriod = 0;
  switch (period) {
    case 3:
      totalPeriod = amount * .05;
      break;
  
    case 6:
      totalPeriod = amount * .10;
      break;
  
    case 12:
      totalPeriod = amount * .15
      break;
  
    case 24:
      totalPeriod = amount * .20;      
      break;
  
    default:
      totalPeriod = amount * .20;
      break;
  }

  return totalAmount + totalPeriod + amount;
}