import React from "react";

const Button = ({ get, text }) => {
  return <button onClick={get}>{text}</button>;
};

export default Button;
