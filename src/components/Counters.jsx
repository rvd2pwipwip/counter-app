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

  handleDelete = id => {
    // 1.copy state counters
    let counters = [...this.state.counters];
    // 2.update copy of state
    counters = this.state.counters.filter(c => c.id !== id);
    // 3.set new counters object to state
    this.setState({ counters });
  };

  render() {
    return (
      <>
        {this.state.counters.map(c => (
          <Counter
            key={c.id}
            value={c.value}
            id={c.id}
            // counter={c}
            handleDelete={this.handleDelete}
          />
        ))}
      </>
    );
  }
}

export default Counters;
