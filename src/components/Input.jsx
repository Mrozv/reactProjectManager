import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      <label className="text-2xl">{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </div>
  );
});

export default Input;
