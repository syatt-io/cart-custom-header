import { useEffect } from "react";

const useOutsideClick = (ref,event, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener(event, handleClick);

    return () => {
      document.removeEventListener(event, handleClick);
    };
  });
};

export default useOutsideClick;