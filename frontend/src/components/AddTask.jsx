import CustomInput from "./CustomInput";
import "./AddTask.scss";
import { useState } from "react";
import CustomButton from "./CustomButon";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa ..."
        value={task}
        onChange={onChange}
      />
      <CustomButton onClick={() => console.log(task)}>
        <FaPlus size={14} color="#FFF" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
