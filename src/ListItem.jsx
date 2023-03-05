import React from "react";


const ListItem = ({todo}) => {
  return(
    <div className={todo.complete ? "strike" : ""}>
      {todo.task}
    </div>
  )
};

export default ListItem;