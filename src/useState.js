import React, { Component, useState } from "react";

const useState = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <>
      {item}
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </>
  );
};

export default useState;
