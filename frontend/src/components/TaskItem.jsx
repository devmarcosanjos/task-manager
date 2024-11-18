const TaskItem = ({ task }) => {
  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.completed ? "Completed" : "Not Completed"}</p>
    </>
  );
};

export default TaskItem;