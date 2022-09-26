import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

// Should have initalValues and label as props.
// Show use useNumberList hook to get following functionality:
// list: elements that are present in the list.
// appendStart: to append element at start of the list.
// popEnd: to pop elements at the end of the list.
// clear: to set the list to empty.
// reset: to reset the value of list to initalValues.

type List1Props = {
  // TODO
  label: string;
  initalValues: number[];
};

const List1 = (props: List1Props) => {
  const [data, setData] = useState<any>();
  let { label, initalValues } = props;

  const { list, appendStart, popEnd, appendEnd, popStart, clear, reset } =
    useNumberList(initalValues);

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{props.label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{list}</div>

      <input
        data-testid="list1-input"
        onChange={(e) => setData(e.target.value)}
      />
      <button
        data-testid="list1-btn-append-start"
        onClick={() => appendStart(data)}
      >
        {}Append
      </button>
      <button data-testid="list1-btn-pop-end" onClick={() => popEnd()}>
        {/* po last element btn */} popEnd
      </button>
      <button
        data-testid="list1-btn-clear"
        onClick={() => {
          clear();
        }}
      >
        {/* clear list and set empty button */} Clear
      </button>
      <button
        data-testid="list1-btn-reset"
        onClick={() => {
          reset();
        }}
      >
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
