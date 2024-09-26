import styles from "./Display.module.css";

const Display = ({curVal})=>{
  return  <input type="text" className={styles.display}
  value = {curVal}
  readOnly/>
}
export default Display;