
import './App.css';

import { Button } from "react-bootstrap"; 
import defaultTodos from "./data.ts";

import TodoList from "./components/TodoList";
import { useState } from 'react';

function App() {
   const addTodo = () =>  {
      const newTodo = {
        id: TodoList.length + 1,
        title: "New Todo",
        completed: false,
      };

      setTodos{[...todos, newTodo]}; 
    };
  }
  
const toggleComplete 

   [Todos, setTodos] = useState(defaultTodos);


return 
   {
   <div className ="container">
       <h1>Todo App Example </h1>
        <Button className='mt-2 mb-2'>add Todo</Button>
    }

export default App;
