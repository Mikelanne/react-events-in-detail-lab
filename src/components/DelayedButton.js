// Code DelayedButton Component Here

import React from "react";

export default class DelayedButton extends React.Component {

    setTimeout = (event) => {
        event.persist()
        this.props.delay 
        this.props.onDelayedClick(event)
    }


    render() {
        return(
            <button onClick={this.setTimeout}></button>
        )
    }
}