import CustomInput from "./CustomInput";
import "./AddTask.scss";
import { useState } from "react";
import CustomButton from "./CustomButon";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";
import axios from "axios";

const AddTask = ({ featchTasks }) => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };

  const handleTaskAddition = async () => {
    console.log("Task value:", task);
    try {
      if (task.trim().length === 0) {
        setTask("");
        return alert.error("Por favor, adicione uma tarefa");
      }

      await axios.post("http://localhost:8000/tasks", {
        description: task,
        isCompleted: false,
      });

      await featchTasks();
      setTask("");

      await alert.success("Tarefa adicionada com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa ..."
        value={task}
        onChange={onChange}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#FFF" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
