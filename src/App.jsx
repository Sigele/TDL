import React from 'react';
import { useState } from 'react';
import data from './testData.json';
import './index.css';

//components
import Header from './Header';
import ToDoList from './ToDoList';


const App = () => {

  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete : !task.complete } : {...task};
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  return(
    <div>
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  )
}

export default App;