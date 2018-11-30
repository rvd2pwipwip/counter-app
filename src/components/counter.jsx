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
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.value)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            this.props.handleDelete(this.props.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
