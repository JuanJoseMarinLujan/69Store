import React, { useState } from "react";
import { useEffect } from "react";

const Counter = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  function increment() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function decrement() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <form className="flex flex-col gap-5">
        <div className="flex justify-start items-center gap-5 h-1/2">
          <button
            type="button"
            onClick={decrement}
            className="bg-richB text-richW w-10 h-6 flex justify-center items-center rounded-xl hover:bg-orange hover:shadow hover:shadow-richB"
          >
            <i className="uil uil-minus"></i>
          </button>
          <label htmlFor="" className="font-bold text-xl">
            {count}
          </label>
          <button
            type="button"
            onClick={increment}
            className="bg-richB text-richW w-10 h-6 flex justify-center items-center rounded-xl hover:bg-orange hover:shadow hover:shadow-richB"
          >
            <i className="uil uil-plus"></i>
          </button>
        </div>
        <button
          type="button"
          className="bg-richB text-silver hover:text-richB w-20 h-1/2 flex justify-center p-1 items-center rounded-xl hover:bg-sunglow hover:shadow hover:shadow-richB"
          onClick={() => onAdd(count)}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Counter;
