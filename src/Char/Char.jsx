import React from "react";

const style = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black", 
  minWidth: "80px"
};

const char = props => {
  return <div style={style} onClick={props.click}>lol: {props.data}</div>;
};

export default char;
