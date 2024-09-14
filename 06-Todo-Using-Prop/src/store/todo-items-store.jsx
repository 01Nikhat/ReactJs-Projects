import { createContext } from "react";

export const TodoItemsContext = createContext({
  TodoItems: [],
  addNewItem: () =>{},
  deleteItem: () =>{},
});