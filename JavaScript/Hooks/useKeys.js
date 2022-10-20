import { useEffect, useRef } from "react";

export default function useKey(key, callBack) {
  const callBackRef = useRef(callBack);

  useEffect(() => {
    callBackRef.current = callBack;
  });

  useEffect(() => {
    const handledKey = (event) => {
      if (event.key === key) {
        callBackRef.current(event);
      }
    };

    document.addEventListener("keydown", handledKey);
    // return () => document.addEventListener("keydown", handledKey);
  }, [key]);
}

// Handle Modal Close using Esc Key
const handleKeys = () => {
  setOpenCurrency(false);
  clearStaging();
};
useKey("Escape", handleKeys);
