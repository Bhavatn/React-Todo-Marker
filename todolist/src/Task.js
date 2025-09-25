export const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "#7693d8ff" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <div className="task-btn-group">
        <button onClick={() => props.completeTask(props.id)}> Complete </button>
        <button onClick={() => props.deleteTask(props.id)}> X </button>
      </div>
    </div>
  );
};