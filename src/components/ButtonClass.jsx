import React, { Component } from "react";

class ButtonClass extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <button style={{ color: this.props.color }}>
            {this.props.text ? this.props.text : "Default Button"}</button>
    }
}

export default ButtonClass