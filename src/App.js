import { Fragment, useState } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Result from './components/Result';
import Message from './components/Message';
import Spinner from './components/Spinner';
import Error from './components/Error';

function App() {

  const [ error, saveError ] = useState(false);
  const [ amount, saveAmount ] = useState(0);
  const [ period, savePeriod ] = useState('');
  const [ total, saveTotal ] = useState(0);
  const [ loadSpinner, saveLoadSpinner ] = useState(false);

  let component;
  if(loadSpinner) {
    
    component = <Spinner />

  }else if ( error ) {
    
    component = <Error />;

  }else if ( total === 0 || isNaN(total)) {
    
    component = <Message />
  
  } else {
  
    component = <Result 
                  total={ total }
                  period={ period }
                  amount={ amount }
                />
  }

  return (
    <Fragment>
      <Header 
        title="Loan Administrator"
      />
      <div className="container">
        <Form 
          error={ error }
          saveError={ saveError }
          amount={ amount }
          saveAmount={ saveAmount }
          period={ period }
          savePeriod={ savePeriod }
          saveTotal={ saveTotal }
          saveLoadSpinner={ saveLoadSpinner }
        />  
        <div class="mensajes">
          { component }
        </div>   
      </div>   
    </Fragment>
  );
}

export default App;
