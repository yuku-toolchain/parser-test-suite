var arrObj = [1, 2, 3];
Object.defineProperty(arrObj, "length", {
  writable: false
});