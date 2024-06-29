import AddTask from "./AddTask";

export default function ToDoList({
  selectedProject,
  onTaskAdd,
  tasks,
  onTaskDelete,
}) {
  const projectTasks = tasks.filter(
    (task) => task.projectId === selectedProject.id
  );

  return (
    <div>
      <div className="text-4xl font-semibold mb-4">Tasks</div>
      <AddTask onTaskAdd={onTaskAdd} projectId={selectedProject.id} />
      {projectTasks.length > 0 ? (
        <ul className="w-full">
          {projectTasks.map((task) => (
            <li className="flex w-full justify-between py-2" key={task.id}>
              <span className="text-2xl w-full break-all first-letter:uppercase">
                {task.task}
              </span>
              <button
                onClick={(e) => {
                  onTaskDelete(task.taskId);
                }}
                className="px-4 text-xl hover:text-red-400"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className=" mt-4 text-xl text-stone-400">Tasks not added yet...</h1>
      )}
    </div>
  );
}
