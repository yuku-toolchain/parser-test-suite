try {
  Object.defineProperty(Array.prototype, "0", {
    value: 11,
    configurable: true
  });
  var arrObj = [];
  Object.defineProperty(arrObj, "0", {
    configurable: false
  });
  if (!arrObj.hasOwnProperty("0")) {}
  if (Array.prototype[0] !== 11) {}
  if (typeof arrObj[0] !== "undefined") {}
} finally {
  delete Array.prototype[0];
}