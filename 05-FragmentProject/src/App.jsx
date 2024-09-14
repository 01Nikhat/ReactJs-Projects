
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  FoodItems from './components/FoodItems';
import ErrorMsg from './components/ErrorMsg';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';
function App() {
 // let FoodItem = ["Roti","Greem Vegetable", "Fruit","Milk","Salad","Ghee"];

 let [FoodItem, setFoodItem] =  useState([]);
  //let [textState, setTextState] = useState();
 

  const onKeyDown = (event)=>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...FoodItem,newFoodItem];
      setFoodItem(newItems);
      console.log("Food value enter is :" + newFoodItem);
    }
    
   // setTextState (event.target.value);
  }

  return (
   <Container>
   <h1 className='foodHeading'>Healthy Food</h1>
    <ErrorMsg items = {FoodItem}></ErrorMsg>
    <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
    
    <FoodItems items = {FoodItem}></FoodItems>
   </Container>
  );
}

export default App
