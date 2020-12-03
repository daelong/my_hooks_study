import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const useTitles = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("hi"), 5000);
  return (
    <div>
      <div>Hi</div>
    </div>
  );
};

export default useTitles;
