import React, { Component, useState } from "react";

const makeUseInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const useInput = () => {
  // const maxLen = (value) => value.length <= 10;
  const maxLen = (value) => !value.includes("@");
  const name = makeUseInput("Mr.", maxLen);
  return (
    <div>
      <h1>hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

export default useInput;
