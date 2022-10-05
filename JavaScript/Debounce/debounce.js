// Call a function after a certain time to prevent unwanted calls using debounce method

const debounce = (func, delay) => {
  let timeOut;
  return function () {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      func();
    }, delay);
  };
};
