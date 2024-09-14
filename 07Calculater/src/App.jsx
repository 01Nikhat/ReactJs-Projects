import Display from './components/Display'
import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react';


function App() {

 const [calVal,setCalVal] = useState("");

  let displayInput = (buttonText)=>{
    if(buttonText === 'c'){
      setCalVal("");
      
    }else if(buttonText === '='){
      const result  = eval(calVal);
      setCalVal(result);
        
    }else{
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
    console.log( buttonText);
    
  }


  
  return (
   <div className={styles.Calculater}>
      <Display curVal = {calVal}></Display>
      <ButtonContainer onButtonClick = {displayInput }></ButtonContainer>
   </div>
  )
}

export default App
