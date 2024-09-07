import Items from "./Item";
function FoodItems({items}) {
  let FoodItems = ["Roti","Greem Vegetable", "Fruit","Milk","Salad","Ghee"];
  return (
    <ul className="list-group">
      {items.map((item)=>(
        <Items key={item} FoodItem = {item}></Items>
      ))}
      
    </ul>
  );
}
export default FoodItems;