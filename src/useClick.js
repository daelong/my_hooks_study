import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick != "function") {
    //onClick이 function이 아닐경우 끝
    return;
  }
  const element = useRef(); //element를 reference로 만들어줌
  useEffect(() => {
    if (element.current) {
      //mount될때 이걸 실행해주고
      element.current.addEventListener("click", onClick); //이벤트 추가
    }
    return () => {
      if (element.current) {
        //unmount될때 이걸 실행해줌
        element.current.removeEventListener("click", onClick); //이벤트 삭제
      }
    };
  }, []);
  return element;
};

const useClicks = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello); //title을 useClick으로 ref하고 title은 p를 ref함 즉 useClick -> title -> p, sayHello함수를 onClick함수로 넣어줌
  return (
    <div>
      <p ref={title}>Hi</p>
    </div>
  );
};

export default useClicks;
