import { forwardRef, useRef } from "react";

const Modal = forwardRef(({ children }, ref) => {
  return (
    <dialog
      className={
        "m-0 w-full px-2 py-2 rounded text-center fixed bottom-0 bg-red-400 text-xl font-semibold text-white"
      }
      ref={ref}
    >
      <span className="w-full">{children}</span>
    </dialog>
  );
});

export default Modal;
