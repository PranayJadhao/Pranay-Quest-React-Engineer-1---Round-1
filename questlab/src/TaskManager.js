
import React, { useState } from "react";
 import Task from "./Task";
 import "./TaskManager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", category: "todo" },
    { id: 2, title: "Task 2", category: "inprogress" },
    { id: 3, title: "Task 3", category: "done" },
    { id: 4, title: "Task 4", category: "review" },
  ]);

   const [draggedTask, setDraggedTask] = useState(null);
    const [newTask, setNewTask] = useState("");

      const handleInputChange = (e) => {
        setNewTask(e.target.value);
      };

      const handleAddTask = (category) => {
        if (newTask.trim() !== "") {
          const newId = tasks.length + 1;
          const newTaskObj = { id: newId, title: newTask, category };
          setTasks([...tasks, newTaskObj]);
          setNewTask("");
        }
      };
    
  const handleDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, category) => {
    const updatedTasks = tasks.map((task) => {
      if (task === draggedTask) {
        return { ...task, category };
      }
      return task;
    });
    setTasks(updatedTasks);
    setDraggedTask(null);
  };

    return (
      <div className="container">
        <h1>Task Manager</h1>
        <div className="TaskManager">
          <div className="board">
            <div
              className="column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "todo")}
            >
              <h2 className="heading">Todo</h2>
              {tasks
                .filter((task) => task.category === "todo")
                .map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    handleDragStart={handleDragStart}
                  />
                ))}
              <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Add task"
              />
              <button className="addbtn" onClick={() => handleAddTask("todo")}>Add Task</button>
            </div>
            <div
              className="column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "inprogress")}
            >
              <h2 className="heading">In Progress</h2>
              {tasks
                .filter((task) => task.category === "inprogress")
                .map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    handleDragStart={handleDragStart}
                  />
                ))}
            </div>
            <div
              className="column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "done")}
            >
              <h2 className="heading">Done</h2>
              {tasks
                .filter((task) => task.category === "done")
                .map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    handleDragStart={handleDragStart}
                  />
                ))}
            </div>
            <div
              className="column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "review")}
            >
              <h2 className="heading">Review</h2>
              {tasks
                .filter((task) => task.category === "review")
                .map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    handleDragStart={handleDragStart}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default TaskManager;


