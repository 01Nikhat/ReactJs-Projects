
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  FoodItems from './components/FoodItems';
import ErrorMsg from './components/ErrorMsg';
function App() {
  let FoodItem = ["Roti","Greem Vegetable", "Fruit","Milk","Salad","Ghee"];
  
  return (
   <><h1>Healthy Food</h1>
    <ErrorMsg items = {FoodItem}></ErrorMsg>
    
    <FoodItems items = {FoodItem}></FoodItems>
   </>
  );
}

export default App
