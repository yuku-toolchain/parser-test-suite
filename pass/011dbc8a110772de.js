var arr = [0, 1, 2];
var result = 0;
try {
  Object.defineProperty(arr, "1", {
    configurable: false
  });
  Object.defineProperties(arr, {
    length: {
      value: 0,
      writable: false
    }
  });
} catch (e) {}