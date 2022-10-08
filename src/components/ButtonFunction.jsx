import React from "react";

const ButtonFunction = ({ text = "Default", color , onClickHandler}) => {
  
    return <button onClick={onClickHandler} style={{ color: color }}>{text}</button>
}

export default ButtonFunction