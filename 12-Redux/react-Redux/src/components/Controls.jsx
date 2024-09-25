import { useRef } from "react";
import { useDispatch } from "react-redux";


const Controls = () =>{
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch({type:"INCREMENT"});

  }
  const handleDecrement = () =>{
    dispatch({type:"DECREMENT"})
    
  }
  const handleAdd = () =>{
    dispatch({type:"ADD",payload:{num: inputElement.current.value

    }});
    inputElement.current.value = "";
    
  }
  const handleSubtract = () =>{
    dispatch({type:"SUBTRACT",payload:{num: inputElement.current.value

    }});
    inputElement.current.value = "";
    
  }
  const handlePrivacy = () =>{
    dispatch({type:"PRIVACY_TOGGLE"});
    inputElement.current.value = "";
    
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