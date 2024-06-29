import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";
import { useRef } from "react";
import { createPortal } from "react-dom";

export default function AddNewProject({ onAddProject, onCancel, ...props }) {
  const title = useRef();
  const modalRef = useRef();
  const description = useRef();
  const date = useRef();

  function showModal() {
    modalRef.current.show();
    setTimeout(() => {
      modalRef.current.close();
    }, 5000);
  }

  function handleSaveNewProject() {
    if (
      title.current.value != "" &&
      description.current.value != "" &&
      date.current.value != ""
    ) {
      onAddProject({
        title: title.current.value,
        description: description.current.value,
        date: date.current.value,
      });
    } else {
      showModal();
    }
  }

  const inputStyles = "rounded text-stone-700 py-2 px-4 text-xl";

  return (
    <div {...props}>
      {createPortal(
        <Modal ref={modalRef}>
          Oh no! Please check if you entered all values 🤔
        </Modal>,
        document.body
      )}
      <div className="w-3/6 max-[768px]:w-10/12">
        <div className="flex gap-4 justify-end">
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            className={"bg-stone-600 rounded px-4 py-2 hover:bg-stone-500"}
            onClick={handleSaveNewProject}
          >
            Save
          </Button>
        </div>
        <div className={"flex flex-col gap-4"}>
          <Input
            type="text"
            ref={title}
            label="Title"
            className={inputStyles}
          />
          <Input
            ref={description}
            label="Description"
            textarea
            className={inputStyles}
          />
          <Input
            type="date"
            ref={date}
            label="Due Date"
            className={inputStyles}
          />
        </div>
      </div>
    </div>
  );
}
