import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };
  render() {
    return (
      <>
        {this.state.counters.map(c => (
          <Counter key={c.id} value={c.value} />
        ))}
      </>
    );
  }
}

export default Counters;
