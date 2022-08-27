import React from "react";

interface InputI {
  className?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: any;
}

const Input: React.FC<InputI> = (props) => {
  return (
    <input
      className={props.className || ""}
      type={props.className || "text"}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
