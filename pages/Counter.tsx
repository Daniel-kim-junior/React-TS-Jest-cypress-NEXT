import React, { Component } from "react";


class Counter extends React.Component {
  state = {
    value: 0,
    title: "",
  };
  changeTitle = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState(() => {
      title: e.currentTarget.value;
    });
  };
  increment = () => {
    this.setState((prevState: {value: number, title: string}) => ({ value: prevState.value + 1 }));
  };

  render() {
    return (
      <div>
        <input value={this.state.title} id="title" onChange={this.changeTitle} />
        <b>{this.state.value}</b>
        <button id="up" onClick={this.increment}>
          증가
        </button>
      </div>
    );
  }
}

export default Counter;
