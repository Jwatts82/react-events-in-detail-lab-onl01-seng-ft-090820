// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let position = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(position)
    }

    render() {
        return (
            <div>
          <button type="button" onClick={this.handleClick} />
            </div>
          )
    }

}

export default CoordinatesButton;