import React, { Component } from "react";

class ButtonClass extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <button style={{ color: this.props.color }}>
            {this.props.text}</button>
    }
}

ButtonClass.defaultProps = {
    text: "Default"
}

export default ButtonClass