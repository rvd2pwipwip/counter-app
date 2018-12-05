import React, { Component } from "react";
class Counter extends Component {
  // componentWillUnmount() {
  //   console.log("component unmounted");
  // }

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
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.handleIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.handleDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              this.props.handleDelete(this.props.counter);
            }}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
