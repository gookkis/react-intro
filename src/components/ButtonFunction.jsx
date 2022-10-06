import React from "react";

const ButtonFunction = ({ text = "Default", color }) => {
    return <button style={{ color: color }}>{text}</button>
}

export default ButtonFunction