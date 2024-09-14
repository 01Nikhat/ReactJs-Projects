import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


const TodoItems = ()=>{
  const {todoItems} = useContext(TodoItemsContext);
  


  return <>
    <div className="todo-container">
      {todoItems.map((item)=>(
        <TodoItem 
            key={Date.now()}
            toDoName={item.name} 
            toDoDate={item.dueDate}
        >

        </TodoItem>
        ))}
      
      
      </div>
  </>
};
export default TodoItems;