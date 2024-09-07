import AddHeader from './components/AddHeader'
import AddTodo from './components/AddTodo'
import AddItem1 from './components/Item1'
import AddItem2 from './components/Item2'
import './App.css'


function App() {
  

  return (<center className = "container">
    <AddHeader />
    <AddTodo />
    <div className="todo-container">
    <AddItem1 />
    <AddItem2 />
    </div>
   
     </center>)
}


export default App
