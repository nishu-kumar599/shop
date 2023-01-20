import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="mt-8">
      <label className="input-field py-0">{props.label}</label>
      <input
        className="rounded-md border ml-4 px-2 py-1 border-black"
        ref={ref}
        {...props.input}
      />
    </div>
  );
});
export default Input;
