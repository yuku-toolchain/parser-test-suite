let o = {
  b: 2
};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
  writable: false,
  configurable: true
});
var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  ...o,
  a: 3
});