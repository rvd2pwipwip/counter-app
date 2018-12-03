import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button
          className="btn btn-primary btn-sm m-2 "
          onClick={this.props.handleReset}
        >
          Reset
        </button>
        {this.props.counters.map(c => (
          <Counter
            key={c.id}
            counter={c}
            handleDelete={this.props.handleDelete}
            handleIncrement={this.props.handleIncrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
