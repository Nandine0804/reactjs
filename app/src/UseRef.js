import React from "react";
import { useRef } from "react";
const UseRef = () => {
  const txt = useRef();
  const color = useRef();
  const submit = (e) => {
    e.preventDefault();
    const title = txt.current.value;
    const hexColor = color.current.value;
    alert(`${title}, ${hexColor}`);
    txt.current.value = "";
    color.current.value = "";
  };
  return (
    <div>
      <form className="text-center" onSubmit={submit}>
        <input
          className="text-black outline-none w-150 p-5 h-10 rounded-lg shadow-lg shadow-black-500/50"
          ref={txt}
          type="text"
          placeholder="enter your color"
        />
        <input ref={color} type="color" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UseRef;
