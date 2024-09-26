import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


const WelcomeMessage = ()=>{
  const contextObject = useContext(TodoItemsContext);
  const todoItems = contextObject.todoItems;
  return todoItems.length === 0 && <p>Enjoy Your Day</p>
}
export default WelcomeMessage;