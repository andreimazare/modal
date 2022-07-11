import React from "react";
import "./TaskList.css";
import Card from "../Card/Card";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";
import CreateTask from "../CreateTask/CreateTask";

const TaskList = () => {
  const [tasks, setTasks] = useState(false);

  const addTaskHandler = (e) => {
    // console.log('add task');
    setTasks(true);
  };

  const closeModalHandler = () => {
    setTasks(false);
  };

  return (
    <div className="task-container">
      <div className="task-create-btn">
        <h1>Tasks for today</h1>
        <button onClick={addTaskHandler}>+ Add Task</button>
      </div>
      <div className="tasks">
        {tasks && <CreateTask />}
        {tasks && <Backdrop onClick={closeModalHandler} />}
        <Card title="bla bla" description="bla bla" />
      </div>
    </div>
  );
};

export default TaskList;
