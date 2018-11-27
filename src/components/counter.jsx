import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
    // tags: []
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? `warning` : `primary`;
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>Please create a new tag</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = e => {
    //e is the event argment passed from the onClick arrow function
    console.log(e);
    this.setState({ count: e + 1 });
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.count)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "No tags to render!"}
        {this.renderTags()}
      </>
    );
  }

  // render() {
  //   return this.state.tags.length === 0 ? (
  //     <>
  //       No tags to render
  //       <p>Please create a new tag</p>
  //     </>
  //   ) : (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
