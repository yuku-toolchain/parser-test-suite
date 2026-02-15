let o = {};
Object.defineProperty(o, "b", {
  value: 3,
  enumerable: false
});
var callCount = 0;
(function (obj) {
  callCount += 1;
})({
  ...o
});