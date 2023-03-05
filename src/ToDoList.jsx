import React from 'react';
import ListItem from './ListItem';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
  return(
    <div>
      {toDoList.map(todo => {
        return (
          <ListItem todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
        )
      })}
      <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
    </div>
  )
}

export default ToDoList;