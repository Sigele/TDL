import React, { useState } from "react";

const [ userInput, setUserInput ] = useState('');

const handleChange = (e) => {
  setUserInput(e.currentTarget.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  addTask(userInput);
  setUserInput('');
}

const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false}];
  setToDoList(copy);
}


const ToDoForm = () => {
  return(
    <div>
      <input value={userInput} type='text' onChange={handleChange} placeholder='What we doin...'/>`
    </div>
  )
}
 export default ToDoForm;