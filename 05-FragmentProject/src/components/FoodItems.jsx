import { useState } from "react";
import Items from "./Item";


function FoodItems({items}) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (items, event) =>{
    let newItems = [...activeItems,items];
    setActiveItems(newItems);
  };


 // let FoodItems = ["Roti","Greem Vegetable", "Fruit","Milk","Salad","Ghee"];
  return (
    <ul className="list-group">
      {items.map((item)=>(
        <Items key={item} FoodItem = {item}
        bought = {activeItems.includes(item)}  handleByClick = { (event)=> onBuyButton(item,event)
        }></Items>
      ))}
      
    </ul>
  );
}
export default FoodItems;