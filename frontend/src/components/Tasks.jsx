import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const featchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    featchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <div className="task-list">
          <h3>Últimas tarefas</h3>
          <AddTask />
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem task={lastTask} />
            ))}
        </div>
      </div>
      <div className="completed-tasks">
        <div className="task-list">
          <h2>Tarefas concluídas</h2>
          {tasks
            .filter((task) => task.isCompleted === true)
            .map((completedTask) => (
              <TaskItem task={completedTask} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
