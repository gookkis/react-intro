import React from "react";

const ButtonFunction = ({ text, color }) => {
    return <button style={{ color: color }}>{text ? text : "Default Button"}</button>
}

export default ButtonFunction