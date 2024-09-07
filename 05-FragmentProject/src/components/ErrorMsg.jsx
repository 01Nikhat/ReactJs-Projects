function ErrorMsg({items}) {
  let FoodItem = ["Roti","Greem Vegetable", "Fruit","Milk","Salad","Ghee"];
  return (
   <>{items.length === 0 && <h3>I am still hungry.</h3>}</> 
  )
}
export default ErrorMsg;