import React from "react";
import "./Option.css";

const Option = (props) => {
  return (
    <div className="container">
      <img className="option_icon" src={props.icon}></img>
      <div className="option">
        <p className="label">
          {/*
          <span>
            <img className="option_icon" src={props.icon}></img>
          </span>
        */}
          {props.label}
        </p>
      </div>
    </div>
  );
};

export default Option;
