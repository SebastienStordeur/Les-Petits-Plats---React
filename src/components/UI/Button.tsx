import React from "react";

interface ButtonInterface {
  children: React.ReactNode;
  className: string;
  onClick?: any;
}

const Button: React.FC<ButtonInterface> = (props) => {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
