let o = {
  a: 2,
  b: 3
};
var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  a: 1,
  b: 7,
  ...o
});