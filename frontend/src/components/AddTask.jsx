import CustomInput from "./CustomInput";
import "./AddTask.scss";
import { useState } from "react";
import CustomButton from "./CustomButon";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";

const AddTask = () => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error("Por favor, adicione uma tarefa");
      }
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
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#FFF" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
