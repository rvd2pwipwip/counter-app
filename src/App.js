import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };

  handleReset = () => {
    // 1.copy state counters
    let counters = [...this.state.counters];
    // 2.update copy of state
    counters.map(c => (c.value = 0));
    // 3.set new counters object to state
    this.setState({ counters });
  };

  handleDelete = e => {
    // 1.copy state counters
    let counters = [...this.state.counters];
    // 2.update copy of state
    counters = counters.filter(c => c !== e);
    // 3.set new counters object to state
    this.setState({ counters });
  };

  handleIncrement = e => {
    //e is the event argument passed by the onClick of <Counter/> increment button (counter)
    // 1.copy state counters
    const counters = [...this.state.counters];
    // 2.find counter in copied array and increment its value by 1
    counters.find(c => c === e).value++;
    // 3.set new counters object to state
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main role="main" className="container">
          <Counters
            handleReset={this.handleReset}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
