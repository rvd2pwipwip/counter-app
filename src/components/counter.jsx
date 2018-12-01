import React, { Component } from "react";
class Counter extends Component {
  formatCount() {
    const { value } = this.props.counter; // object destructuring to read value of counter
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? `warning` : `primary`;
    return classes;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.handleIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            this.props.handleDelete(this.props.counter);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
