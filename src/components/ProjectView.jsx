import ToDoList from "./ToDoList";

export default function ProjectView({
  selectedProject,
  onTaskAdd,
  tasks,
  onTaskDelete,
  onProjectDelete,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex justify-between w-3/4">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold first-letter:uppercase break-all">
            {selectedProject.title}
          </h1>
          <p className="text-2xl first-letter:uppercase break-all">
            {selectedProject.description}
          </p>
          <h2>{selectedProject.date}</h2>
        </div>
        <div className="content-end">
          <button
            className="h-fit text-xl hover:text-red-400"
            onClick={() => {
              onProjectDelete(selectedProject.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <hr width="75%" className="my-6" />
      <div className="w-3/4">
        <ToDoList
          onTaskDelete={onTaskDelete}
          onTaskAdd={onTaskAdd}
          selectedProject={selectedProject}
          tasks={tasks}
        />
      </div>
    </div>
  );
}
