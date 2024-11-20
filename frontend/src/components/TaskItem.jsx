import { AiFillDelete } from "react-icons/ai";
import "./TaskItem.scss";
import axios from "axios";

import { useAlert } from "react-alert";

const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert();

  const handleTaskDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${task._id}`);
      await fetchTasks();
      alert.success("Task deleted successfully");
    } catch (error) {
      alert.error("Failed to delete task");
    }
  };

  const handleTaskCompletionChange = async () => {
    try {
      await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
        isCompleted: !task.isCompleted,
      });

      await fetchTasks();

      alert.success("Task updated successfully");
    } catch (error) {}
  };
  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={handleTaskCompletionChange}
          />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>
      <div className="delete">
        <AiFillDelete size={18} color="#f97474" onClick={handleTaskDelete} />
      </div>
    </div>
  );
};

export default TaskItem;
