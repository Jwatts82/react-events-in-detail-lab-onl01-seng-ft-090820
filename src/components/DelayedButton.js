// Code DelayedButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends React.Component {
    
    handleClick = (event) => {
        event.persist()
        setTimeout( () => {this.props.onDelayedClick(event)}, this.props.timeout)
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
