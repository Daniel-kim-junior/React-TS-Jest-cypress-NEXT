import React, { useRef, useEffect, useState } from "react";

type stateType = {
  value: number,
  title: string,
}

function Counter () {
  const [state, setState] = useState<stateType>({
    value: 0,
    title: "",
  })

  const changeTitle = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
      title: e.currentTarget.value,
      value: state.value
    });
  };
  const increment = () => {
    setState({value: state.value + 1, title: state.title})
  }
    return (
      <div>
        <input value={state.title} id="title" onChange={changeTitle} />
        <b>{state.value}</b>
        <button id="up" onClick={increment}>
          증가
        </button>
      </div>
    );
}
  


export default Counter;
