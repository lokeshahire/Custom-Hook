import React, { useRef, useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO

  label: string;
  initalValues: number[];
};
const List2 = (props: List2Props) => {
  let [data, setData] = useState<any>();

  let { list, appendStart, popEnd, appendEnd, popStart, clear, reset } =
    useNumberList(props.initalValues);

  const val = useRef<any>();

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{props.label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{list}</div>

      <input data-testid="list2-input" ref={val} />
      <button
        data-testid="list2-btn-append-end"
        onClick={() => appendEnd(val.current.value)}
      >
        {/* Button to append new number to the end of the list */}AppendEnd
      </button>
      <button data-testid="list2-btn-pop-start" onClick={() => popStart()}>
        {/* Button to  pop first element of the list */}PopStart
      </button>
      <button
        data-testid="list2-btn-clear"
        onClick={() => {
          clear();
        }}
      >
        {/* Button to  clear the list */} Clear
      </button>
      <button
        data-testid="list2-btn-reset"
        onClick={() => {
          reset();
        }}
      >
        {/* Button to  reset the list to initialValue */}Reset
      </button>
    </div>
  );
};

export default List2;
