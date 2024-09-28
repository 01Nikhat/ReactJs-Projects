import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = ( ) =>{
  const item = {
    id: '003',
    image: 'images/3.jpg',
    company: 'NUEVOSDAMAS',
    item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
    original_price: 1599,
    current_price: 495,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.1,
        count: 249,
      },
   }
  return (
   
   
    <main>
      <div className="bag-page">
        <BagItem item = {item} />
        <BagSummary />
        

      </div>
    </main>
    
    
  )

}
export default Bag;