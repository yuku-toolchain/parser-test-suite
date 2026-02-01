let o = {
  c: 3,
  d: 4
};
var callCount = 0;
(function (obj) {
  callCount += 1;
})({
  a: 1,
  b: 2,
  ...o
});