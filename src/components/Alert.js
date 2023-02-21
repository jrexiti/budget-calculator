import React from "react";

const Alert = ({ type, text }) => {
  return <div className={`alert alwert-${type}`}>{text}</div>;
};

export default Alert;
