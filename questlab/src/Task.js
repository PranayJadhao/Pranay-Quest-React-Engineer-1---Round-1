import React from "react";

const Task = ({ task, handleDragStart }) => {
  const handleDrag = (e, task) => {
    handleDragStart(e, task);
  };

  return (
    <div draggable onDragStart={(e) => handleDrag(e, task)} className="task">
      {task.title}
    </div>
  );
};

export default Task;
