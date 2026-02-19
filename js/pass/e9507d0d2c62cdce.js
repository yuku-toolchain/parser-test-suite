let o = {
  a: 2,
  b: 3
};
let o2 = {
  c: 4,
  d: 5
};
var callCount = 0;
(function (obj) {
  callCount += 1;
})({
  ...o,
  ...o2
});