import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";


const Controls = () =>{
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    //console.log(counterAction.increment());
    
    dispatch(counterAction.increment())
  }
  const handleDecrement = () =>{
  // console.log(counterAction.decrement());
    dispatch(counterAction.decrement())
    
  }
  const handleAdd = () =>{
   

    dispatch(counterAction.add(inputElement.current.value));

    inputElement.current.value = "";
    
  }
  const handleSubtract = () =>{
    dispatch(counterAction.subtract(inputElement.current.value));

    inputElement.current.value = "";
    
  }
  const handlePrivacy = () =>{
    dispatch(privacyAction.toggle());
   
    
  }

  return(
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
        <button type="button" className="btn btn-success"onClick={handleDecrement}>-1</button>
        <button type="button" className="btn btn-warning"onClick={handlePrivacy}>Privacy Toggle</button>
       
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
    <input type="text" placeholder="Enter Number" className="inputNumber" ref={inputElement}/>
    <button type="button" className="btn btn-info"onClick={handleAdd}>Add</button>
    <button type="button" className="btn btn-danger"onClick={handleSubtract}>Subtract</button>
   
    </div>
    </>  
  )
}
export default Controls;