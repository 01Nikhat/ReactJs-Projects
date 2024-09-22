import AddHeader from './components/AddHeader'
import AddTodo from './components/AddTodo'
import './App.css'
import TodoItems from './components/TodoItems'
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext } from './store/todo-items-store';

function App() {
 
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate)=>{
      console.log(`New item addded : ${itemName} Date: ${itemDueDate}`);
      //const newTodoItems = [...todoItems,{name: itemName, dueDate: itemDueDate}];
      //instead of passing array using spread operator pass alwayas as functional operator
      setTodoItems( (newTodoItems)=>[...todoItems,{name: itemName, dueDate: itemDueDate}]);
      
  }
  const deleteItem = (todoItemName)=>{
    const newTodoItems = todoItems.filter((item) =>
      item.name !== todoItemName );
    setTodoItems(newTodoItems);

  }
  
//const initialTodoItems = [{name:'Buy Milk', dueDate:'4/10/2023'},{name:'Go to College', dueDate:'4/10/2023'}];
//const [todoItems, setTodoItems] = useState([])
  return (

  <TodoItemsContext.Provider
   value={{
    todoItems: todoItems,
    addNewItem:addNewItem,
    deleteItem: deleteItem,
    }}>

      <center className = "container">
        <AddHeader />
        <AddTodo />
        <WelcomeMessage ></WelcomeMessage>
        <TodoItems ></TodoItems>  
      </center>
  </TodoItemsContext.Provider>
  )
}


export default App
