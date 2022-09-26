import { useEffect, useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return

  // list: elements that are present in the list.
  // appendStart: to append element at start of the list.
  // popEnd: to pop elements at the end of the list.
  // clear: to set the list to empty.
  // reset: to reset the value of list to initalValues.

  // return {
  //    list: /** List of numbers */,
  //    appendStart: /** Function to append element at start */,
  //    appendEnd: /** Function to append element at end of list */,
  //    popStart: /** Function to pop element at start of list */,
  //    popEnd: /** Function to pop element at the end of list */,
  //    clear: /** Function to clear the list and set it to empty */,
  //    reset: /** Function to reset list values to the original values */
  //  };

  const [list, setList] = useState(initialArray);

  const appendStart = (params: number) => {
    let array: number[] = [params, ...list];
    setList(array);
  };
  const appendEnd = (params: number) => {
    let array: number[] = [...list, params];
    setList(array);
  };

  const popEnd = () => {
    let array: number[] = [...list];
    array.pop();
    setList(array);
  };
  const popStart = () => {
    let array: number[] = [...list];
    array.shift();
    setList(array);
  };

  const clear = () => {
    let array: number[] = [];
    setList(array);
  };

  const reset = () => {
    let array: number[] = initialArray;
    setList(array);
  };

  return { list, appendStart, popEnd, appendEnd, popStart, clear, reset };
};

export default useNumberList;
