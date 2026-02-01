var items = {
  length: 1
};
var A1 = function (_length) {
  this.length = 0;
  Object.preventExtensions(this);
};
var A2 = function (_length) {
  Object.defineProperty(this, "0", {
    writable: true,
    configurable: false
  });
};