import { useRef, useState , useContext} from "react";
import { TodoItemsContext } from "../store/todo-items-store";


function AddTodo() {

 // const [todoName,setTodoName] = useState("");
  //const [todoDate,setTodoDate] = useState("");

  /*const handleNameChange = (event)=>{
    setTodoName(event.target.value);
      
  }

  const handleDateChange = (event)=>{
    setTodoDate(event.target.value);
   // console.log(noOfClick);    
    
  }
   */

  const {addNewItem} = useContext(TodoItemsContext);

  const toDoNameElement= useRef(0);
  const dueDateElement= useRef(0);

  const handleAddClickButton = (event)=>{
    event.preventDefault();
    const todoName = toDoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
   // console.log(todoName + todoDate);
   addNewItem(todoName,todoDate);
     toDoNameElement.current.value = "";
     dueDateElement.current.value = "";
   // setTodoDate("")
   // setTodoName('')
  }

  return (
    <div className="container text-center">
      
          <form className="row kg-row" onSubmit={handleAddClickButton}>
            <div className="col-6">
              <input type="text" className="inputdata"
              ref={toDoNameElement}
              placeholder="enter TODO here "
              /* value={todoName}
              onChange={handleNameChange}*//>
            </div>
            <div className="col-4">
              <input type="date"
              ref={dueDateElement}
              /* value={todoDate}
             onChange={handleDateChange} *//>
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-success kg-button" >Add</button>
            </div>
          </form>
        </div>
    
    
      );
}
export default AddTodo;