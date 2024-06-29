import Button from "./Button";

export default function NoProjects({ onStartAddProject, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col gap-4 w-fit items-center">
        <img className="w-32" src="/src/assets/no-projects.png" alt="" />
        <span className="text-2xl font-semibold w-fit">
          There are no projects yet
        </span>
        <Button
          className={"bg-stone-600 rounded px-4 py-2 hover:bg-stone-500 w-fit"}
          onClick={onStartAddProject}
        >
          Create new Project
        </Button>
      </div>
    </div>
  );
}
