import React, { useRef, useEffect, useState } from "react";

type stateType = {
  value: number,
  title: string,
}

function Counter () {
  const [state, setState] = useState<stateType>({
    value: 0,
    title: "hospital",
  })

  const changeTitle = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
      title: state.title.toUpperCase(),
      value: state.value
    });
  };
  const increment = () => {
    setState((prev) => ({value: prev.value + 1, title: prev.title}) )
  }
    return (
      <div>
        <input value={state.title} id="title" onChange={changeTitle} />
        <b>{state.title}</b>
        <span>{state.value}</span>
        <button id="up" onClick={increment}>
          증가
        </button>
      </div>
    );
}
  


export default Counter;
