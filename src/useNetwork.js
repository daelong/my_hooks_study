const useNetwork = (onChange) => {
  const [status, setState] = useState(navigator.onLine); //navigator.onLine은 웹사이트가 온라인인지 아닌지 true, false값을 줌
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setState(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      //willunmount일때
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};
