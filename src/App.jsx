import ProjectSidebar from "./components/ProjectSidebar";
import NoProjects from "./components/NoProjects";
import AddNewProject from "./components/AddNewProject";
import { useState } from "react";
import ProjectView from "./components/ProjectView";

function App() {
  const [projectsListState, setProjectsListState] = useState({
    selectedProject: undefined,
    projectsList: [],
    tasks: [],
  });

  function handleDeleteProject(projectId) {
    setProjectsListState((prevState) => {
      const filteredProjects = prevState.projectsList.filter(
        (project) => project.id !== projectId
      );
      const firstProject =
        filteredProjects.length > 0
          ? filteredProjects[filteredProjects.length - 1].id
          : undefined;

      return {
        ...prevState,
        selectedProject: firstProject,
        projectsList: filteredProjects,
      };
    });
  }

  function handleAddProject(object) {
    const newProject = {
      ...object,
      id: Math.random(),
    };
    setProjectsListState((prevState) => {
      return {
        ...prevState,
        selectedProject: newProject.id,
        projectsList: [...prevState.projectsList, newProject],
      };
    });
  }

  function handleStartAddProject() {
    setProjectsListState((prevState) => ({
      ...prevState,
      selectedProject: null,
    }));
  }

  function handleCancel() {
    setProjectsListState((prevState) => {
      const firstProject =
        projectsListState.projectsList.length > 0
          ? projectsListState.projectsList[
              projectsListState.projectsList.length - 1
            ].id
          : undefined;
      return {
        ...prevState,
        selectedProject: firstProject,
      };
    });
  }

  function handleProjectView(projectId) {
    setProjectsListState((prevState) => {
      return {
        ...prevState,
        selectedProject: projectId,
      };
    });
  }

  function handleAddTask(projectId, task) {
    const newTask = {
      projectId: projectId,
      taskId: Math.random(),
      task: task,
    };
    setProjectsListState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsListState((prevState) => {
      const filteredTasks = prevState.tasks.filter(
        (task) => task.taskId !== taskId
      );
      return {
        ...prevState,
        tasks: filteredTasks,
      };
    });
  }

  let content;

  if (projectsListState.selectedProject === null) {
    content = (
      <AddNewProject
        className={
          "h-full flex flex-col bg-stone-700 justify-center content-center items-center"
        }
        onAddProject={handleAddProject}
        onCancel={handleCancel}
      />
    );
  } else if (projectsListState.selectedProject === undefined) {
    content = (
      <NoProjects
        className={
          "h-full flex flex-col bg-stone-700 justify-center content-center items-center"
        }
        onStartAddProject={handleStartAddProject}
      />
    );
  } else {
    const selectedProject = projectsListState.projectsList.find(
      (project) => project.id === projectsListState.selectedProject
    );
    content = (
      <ProjectView
        selectedProject={selectedProject}
        onProjectDelete={handleDeleteProject}
        tasks={projectsListState.tasks}
        onTaskAdd={handleAddTask}
        onTaskDelete={handleDeleteTask}
        className={
          "h-full flex flex-col bg-stone-700 pt-24 pb-24 content-center items-center"
        }
      ></ProjectView>
    );
  }

  return (
    <main className="flex overflow-hidden min-w-screen min-h-screen">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        onProjectView={handleProjectView}
        projects={projectsListState.projectsList}
        selectedProject={projectsListState.selectedProject}
      />
      <div className="w-full">{content}</div>
    </main>
  );
}

export default App;
