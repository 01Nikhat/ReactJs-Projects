import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnKeyDown})=>{
  return <input type="text" className={styles.foodInput} placeholder="Enter Food Item here" onKeyDown={handleOnKeyDown} />
}
export default FoodInput;