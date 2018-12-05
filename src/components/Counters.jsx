import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  // componentDidUpdate(prevProps) {
  //   if (prevProps.counters !== this.props.counters) {
  //     //Ajax call and get new data from server
  //     console.log("getting new data");
  //   } else {
  //     console.log("do nothing");
  //   }
  // }
  render() {
    const {
      handleReset,
      counters,
      handleDelete,
      handleIncrement,
      handleDecrement
    } = this.props;
    return (
      <>
        <button className="btn btn-primary btn-sm m-2 " onClick={handleReset}>
          Reset
        </button>
        {counters.map(c => (
          <Counter
            key={c.id}
            counter={c}
            handleDelete={handleDelete}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
