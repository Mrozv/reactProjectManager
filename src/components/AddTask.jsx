import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import Button from "./Button";

export default function AddTask({ onTaskAdd, projectId }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modalRef = useRef();

  function showModal() {
    modalRef.current.show();
    setTimeout(() => {
      modalRef.current.close();
    }, 5000);
  }

  function handleClick() {
    if (enteredTask !== "") {
      onTaskAdd(projectId, enteredTask);
      setEnteredTask("");
    } else {
      showModal();
    }
  }

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  return (
    <div className="flex items-center mb-2 gap-2 max-[768px]:flex-col max-[768px]:items-start">
      {createPortal(
        <Modal ref={modalRef}>Ooops... input can't be empty 😥</Modal>,
        document.body
      )}
      <input
        onChange={handleChange}
        type="text"
        className="rounded text-stone-700 py-2 px-4 text-xl max-[768px]:w-full"
        value={enteredTask}
      />
      <Button
        onClick={handleClick}
        className="bg-stone-600 rounded px-4 py-2 hover:bg-green-500 max-[768px]:w-full"
      >
        + Add new task
      </Button>
    </div>
  );
}
