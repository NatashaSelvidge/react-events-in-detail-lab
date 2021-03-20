import React from "react";

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let coord = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coord);
  };
  render() {
    return (<button onClick={(event) => this.handleClick(event)}>Coordinates</button>);
  }
}
