// Code CoordinatesButton Component Here

import React from "react";

export default class CoordinatesButton extends React.Component {

    handleOnClick = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let coords = [x, y];

        this.props.onReceiveCoordinates(coords);
    }

    render() {
        return (
            <button onClick={this.handleOnClick}></button>
        )
    }
}
