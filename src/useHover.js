const useHover = (onClick) => {
  if (typeof onClick != "function") {
    //onClick이 function이 아닐경우 끝
    return;
  }
  const element = useRef(); //element를 reference로 만들어줌
  useEffect(() => {
    if (element.current) {
      //mount될때 이걸 실행해주고
      element.current.addEventListener("mouseenter", onClick); //이벤트 추가
    }
    return () => {
      if (element.current) {
        //unmount될때 이걸 실행해줌
        element.current.removeEventListener("mouseenter", onClick); //이벤트 삭제
      }
    };
  }, []);
  return element;
};
