import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="container py-0 px-0">
      <label className="input-field py-0">{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
