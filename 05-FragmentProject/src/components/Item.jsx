import styles from "./Item.module.css"


function Items({FoodItem ,bought,  handleByClick}) {



  return(
    <li  className= {`${styles['kg-item']} list-group-item kg-item ${bought && "active" }`}>
      <span className={styles['kg-span']}>{FoodItem}</span>
      <button className={`${styles.button} btn btn-info`} onClick={ handleByClick}
      >Buy</button>
    </li>
  )
}
export default Items;