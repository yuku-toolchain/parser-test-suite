var arrObj = [0, 1];
Array.prototype[1] = 2;
Object.defineProperty(arrObj, "length", {
  value: 1
});