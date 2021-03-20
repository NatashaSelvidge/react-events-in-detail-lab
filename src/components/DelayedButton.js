import React from "react";

export default class DelayedButton extends React.Component {
  handleClick = (event) => {
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  };
  render() {
    return <button onClick={(event) => setTimeout() this.handleClick(event), this.props.delay(event)}>Delay</button>;
  }
}
