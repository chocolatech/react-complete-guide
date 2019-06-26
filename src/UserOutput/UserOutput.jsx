import React from "react";
import './UserOutput.css';

const UserOutput = props => {
  return (
    <React.Fragment>
      <p className='introduction'>{props.children}</p>
      <p>{props.username}</p>
    </React.Fragment>
  );
};

export default UserOutput;
