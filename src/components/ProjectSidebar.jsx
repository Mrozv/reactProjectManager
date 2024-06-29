import Button from "./Button";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onProjectView,
  selectedProject,
}) {
  const buttonStyles = "text-2xl px-4 py-2 rounded w-full text-left";
  const [showMenu, setShowMenu] = useState(true);

  function handleMenuVisibility() {
    if (window.innerWidth <= 768) setShowMenu((prevState) => !prevState);
  }

  return (
    <aside
      className={`w-1/4 min-h-full bg-stone-800 flex flex-col items-center text-left px-4 py-24 transition ease transform duration-300 ${
        showMenu ? "" : "transform translate-x-[-100%]"
      } max-[768px]:w-[100%] max-[768px]:absolute`}
    >
      <BurgerMenu
        onShowMenu={handleMenuVisibility}
        isShown={showMenu}
        className={`absolute top-0 right-0 bg-stone-500 rounded px-4 py-2 md:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full "
        }`}
      />
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-3xl font-semibold">YOUR PROJECTS</h1>
        <Button
          className={"bg-stone-600 rounded px-4 py-2 hover:bg-stone-500 w-full"}
          onClick={() => {
            onStartAddProject();
            handleMenuVisibility();
          }}
        >
          + Add Project
        </Button>
        <ul className="flex flex-col gap-4 w-full max-h-[60vh] overflow-auto">
          {projects.map((project) => (
            <li className="break-all" key={project.id}>
              <button
                className={
                  selectedProject === project.id
                    ? buttonStyles + " bg-stone-600"
                    : buttonStyles + " hover:bg-stone-500"
                }
                onClick={() => {
                  handleMenuVisibility();
                  onProjectView(project.id);
                }}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
