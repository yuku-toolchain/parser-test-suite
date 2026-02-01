var arr = [0, 1];
try {
  Object.defineProperty(arr, "1", {
    configurable: false
  });
  Object.defineProperties(arr, {
    length: {
      value: 1,
      writable: false
    }
  });
} catch (e) {}