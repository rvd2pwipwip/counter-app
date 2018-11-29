import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? `warning` : `primary`;
    return classes;
  }

  handleIncrement = e => {
    //e is the event argment passed from the onClick arrow function
    this.setState({ value: e + 1 });
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.value)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
